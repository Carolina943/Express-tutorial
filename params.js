const express = require('express'); 
const app = express(); 
const {products} = require('./data')


app.get('/', function(req,res){
    res.send('<h1>Home Page</h1><a href= "/api/products">products</a>')
})


app.get('/api/products', function(req,res){
 const newProducts = products.map((products)=>{
    const {id, name, image} = products;
    return {id, name, image}
 })
    res.json(newProducts)
})
/*
app.get('/api/products/1', function(req,res){
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
})
*/


app.get('/api/products/:productID', function(req, res){
 /*
 console.log(req)
 console.log(req.params)
 */
const {productID} = req.params;

 const singleProduct = products.find((product) => product.id === Number(productID)
 
)
if(!singleProduct){
    return res.status(404).send('Product Does Not Exist')
}
 return res.json(singleProduct)
})


app.get('/api/products/:productID/reviews/:reviewID', function(req,res){
    console.log(req.params);
    res.send("Hello World");
})


app.get('/api/v1/query', function(req,res){
    //console.log(req.query)
    const { search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
      //res.status(200).send('no products matched your search)
      return res.status(200).json({success:true, date: []})
    }
    res.status(200).json(sortedProducts)
    res.send("Hello World")
})


app.listen(5000, function(){
    console.log('Server is listening on port 5000...')
})