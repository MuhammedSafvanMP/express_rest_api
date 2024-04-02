const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

app.use('/products',require('./src/routes/productRoutes'))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));