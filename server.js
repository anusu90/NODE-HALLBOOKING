Rooms = require('./JS/rooms');
Hotel = require("./JS/hotel");

myHotel = new Hotel();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.listen(process.env.PORT || 3001 , function(){
    console.log("Server started")
})

room1 = new Rooms(2,'Eco');
console.log(room1)

// app.get("/", (req,res)=> {
//     res.redirect('http://google.com')
// })