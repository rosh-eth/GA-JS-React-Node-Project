const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.listen(3000, ()=>{
    console.log("I am listening");
});