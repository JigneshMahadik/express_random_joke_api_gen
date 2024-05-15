const express = require("express");
var { getDadjoke } = require("random-jokes");
var fs = require('fs');
const app = express();
const { randomLaughingImageGenerator } = require("random-laughing-image-generator");


// Random image
app.get("/api/images/random", (req, res)=>{
    const resp = randomLaughingImageGenerator();
    // console.log(resp);
    const output = {
        success : true,
        message : resp
    }
    res.json(output);
})

// Random joke and image
app.get("/api/jokes/random", (req, res)=>{
    (async ()=>{
        const joke = await getDadjoke();
        const image = randomLaughingImageGenerator();
        const output = {
            success : true,
            message : [{
                joke : joke,
                imageURL : image
            }]
        }
        res.json(output);
    })();
})



app.listen(8082, ()=>{
    console.log("Server is called");
})