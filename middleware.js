const express = require('express'); 
const app = express(); 
const logger = require('./logger')
const authorize = require('./authorize')
//req => middleware => res


//1. use vs route
//2. options - our own / express / third party

//app.use([logger, authorize])
// api/home/about/products
app.use(express.static('./public'))

app.get('/', function(req,res){
    res.send('Home')
})
app.get('/about', function(req,res){
    res.send('About')
})
app.get('/api/products', function(req,res){
    res.send('Products')
})

app.get('/api/items',[logger, authorize], function(req, res){
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, function(){
    console.log('Server is listening on port 5000...')
})