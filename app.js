const express = require('express');
const app = express();

app.get('/', function(req,res){
 console.log('user hit the resorce')
 res.status(200).send('Home Page')
})

app.get('/about', function(req,res){
    res.status(200).send('About Page')
})

app.all('*', function(req,res){
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, function(){
    console.log('server is listenig on port 5000')
})



//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen