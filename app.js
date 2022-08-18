const express = require('express'); 
const app = express(); 

//req => middleware => res

const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url
    const time = new Date();
    console.log(method, url, time)
    //res.send('Testing')
    next();
}

app.get('/', logger, function(req,res){
   
    res.send('Home')
})

app.get('/about', function(req, res){
    res.send('About')
})

app.listen(5000, function(){
    console.log('Server is listening on port 5000...')
})