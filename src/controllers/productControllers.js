const crypto = require('crypto')
const products = require('../json/data.json')


// get all products

exports.getAllProducts = (request, response)  => {
    response.status(200).json(products)
}

// post create product

exports.createProduct = (request, response)  => {
    const {name,price, quantity, active} = request.body

    if(!name || !price || !quantity || !active){
        return response.status(422).send("values not currect")
    }
    const id = crypto.randomUUID()

  
       products.push({
           id,
           name,
           price,
           quantity,
           active
       })

    response.status(201).send('New products created');
}

// get product by id

exports.getProductById = (request, response) => {
    const findProduct = products.find((product) => product.id === request.params.id)
    if(!findProduct){
        response.status(404).send("page not found");
    }

    response.status(200).json(findProduct);

}

// put update product

exports.updateProduct =  (request, response) => {
    const findProduct = products.find((product) => product.id === request.params.id)
    if(!findProduct){
      return response.status(404).send("page not found");
    }

    const {name,price, quantity, active} = request.body

    if(name)
        findProduct.name = name;
    if(price)
        findProduct.price = price;
    if(quantity)
        findProduct.quantity = quantity;
    if('active' in request.body)
        findProduct.active = active


    response.status(200).send("product updated");

}

// delete delete product

exports.deleteProduct = (request, response) => {
    const deleteId = products.findIndex((product) => product.id === request.params.id)
    if(deleteId == -1){
        return response.status(404).send("page not found")
    }
    products.splice(deleteId, 1);
    response.status(200).send("product deleted successfuly");
}


