let frontendURL = "https://angry-lumiere-4df132.netlify.app/"

Rooms = require('./JS/rooms');
Hotel = require("./JS/hotel");

myHotel = new Hotel();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors(
    {
        origin: "*",
    }
));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT || 3001 , function(){
    console.log("Server started")
})

//WE WILL ADD API FOR ADD ROOM

app.post("/addroom", (req,res)=> {
    console.log(req.body.capacity,req.body.category,req.body.rate);
    myHotel.addroom(req.body.capacity,req.body.category,req.body.rate)
    res.json({
        "message": "Room Created"
    })
})

app.post("/addroomForm", (req,res)=> {
    myHotel.addroom(parseInt(req.body.roomCapacity),req.body.classOfRoom, parseFloat(req.body.roomRate))
    res.redirect(frontendURL)
    
})

app.get("/showrooms", (req,res)=> {
    res.json(myHotel.roomArray)
}
)
app.get("/showbookedrooms", (req,res)=> {
    res.json(myHotel.bookedRooms)
})

// app.post("/bookRoomForm", (req,res)=> {
//     console.log(req.body)

//     let bookingOutcome = myHotel.bookRoom(req.body.customerName,req.body.roomID,new Date(req.body.startTime),new Date(req.body.endTime))
//     if(bookingOutcome ===1) {
//         res.redirect("http://127.0.0.1:5500/JS/NODE-HALLBOOKING/index.html")
//     } else {
//         res.status(406).json({
//             "message": "The room is not available on selected Dates"
//         })
//     }
// })

app.post("/bookRoomJS", (req,res)=> {

    let bookingOutcome = myHotel.bookRoom(req.body.customerName,req.body.roomID, new Date(req.body.startTime), new Date(req.body.endTime))
    if(bookingOutcome ===1) {
        res.status(200).json({
            "message": "The room has been booked Dates"
        })
    } else {
        res.status(406).json({
            "message": "The room is not available on selected Dates"
        })
    }
})
