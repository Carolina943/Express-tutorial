const express = require('express'); 
const app = express(); 
const {products} = require('./data')

app.get('/', function(req,res){
    res.json(products)
})


app.listen(5000, function(){
    console.log('Server is listening on port 5000...')
})