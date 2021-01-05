const Rooms = require('./rooms');


class Hotel{
  
    constructor(){
        this.roomArray =[];
        this.bookedRooms =[]
    }

    addroom(capacity = 2,category ='eco',rate = 100){
        let tempRoom = new Rooms(capacity,category,rate);
        this.roomArray.push(tempRoom);
    }

    checkAvailability (roomID,startTime,endTime){
        let selectedRoom = this.bookedRooms.find(bookedRoomObj => bookedRoomObj.roomID === roomID);


        if (selectedRoom){
            return false
        } else {
            return true
        }

    }

    bookRoom(customerName,roomID,startTime,endTime){

        if(this.checkAvailability(roomID,startTime,endTime)){

            console.log(roomID);
            
            let bookedRoomObj = {
                roomID: roomID,
                customerName: customerName,
                startTime: startTime,
                endTime: endTime
            }

            this.bookedRooms.push(bookedRoomObj);

            console.log(this.bookedRooms);

            return 1

        } else {
            console.log('room already booked');
            return 0
        }

    }
}

module.exports = Hotel;

// H1 = new Hotel();
