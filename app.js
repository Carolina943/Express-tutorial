const express = require('express'); 
const app = express(); 
const logger = require('./logger')
//req => middleware => res

app.use(logger)
// api/home/about/products

app.get('/', function(req,res){
    res.send('Home')
})
app.get('/about', function(req,res){
    res.send('About')
})
app.get('/api/products', function(req,res){
    res.send('Products')
})

app.get('/api/items', function(req, res){
    res.send('Items')
})

app.listen(5000, function(){
    console.log('Server is listening on port 5000...')
})