const express = require('express');
var bodyParser = require('body-parser')

const app = express()


// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/images1', urlencodedParser, (req, res)=>{
    res.send("https://res.cloudinary.com/asgomda/image/upload/v1634396950/Places/hfhdcgdcq4p16enh1jox.jpg")
})

app.get('/', (req, res)=>{
    res.send("I am here!")
})

app.post('/images', urlencodedParser, async (req, res)=>{
    console.log(req.body)
    //res.send("https://res.cloudinary.com/asgomda/image/upload/v1634396950/Places/hfhdcgdcq4p16enh1jox.jpg");
    if (req.body.params.image == 1){
        console.log("sent")
        await res.send("https://res.cloudinary.com/asgomda/image/upload/v1634396950/Places/hfhdcgdcq4p16enh1jox.jpg1")
    } 
    else if(req.body.params.image == 2){
        await res.send("https://res.cloudinary.com/asgomda/image/upload/v1634396950/Places/hfhdcgdcq4p16enh1jox.jpg")
    }
    else if (req.body.params.image == 3){
        await res.send("https://res.cloudinary.com/asgomda/image/upload/v1634396950/Places/hfhdcgdcq4p16enh1jox.jpg")
    }
})

app.listen(8080, ()=>{
    console.log("server is listening on 8080!")
})