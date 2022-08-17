const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
app.use(express.static('./public'))


app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.all('*', function(req,res){
    res.status(404).send('resource not found')
})

app.listen(5000, function(){
    console.log('server is listening on port 5000...')
})