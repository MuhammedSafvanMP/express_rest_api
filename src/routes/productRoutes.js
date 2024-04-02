const router = require('express').Router()
const productsController = require('../controllers/productControllers');

router.get('/', productsController.getAllProducts)
router.get('/:id', productsController.getProductById)
router.post('/', productsController.createProduct)
router.put('/:id', productsController.updateProduct)
router.delete('/:id', productsController.deleteProduct)

router.use((req,res,next) => {
    res.status(404).send("page not found");
})

module.exports = router



