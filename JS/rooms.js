class Rooms {

    id = new Date().getTime();

    constructor(capacity =2,category ='eco',rate = 100){
        this.capacity = capacity;
        this.category = category;
        this.rate = rate;
    }

}

module.exports =  Rooms;

r1 = new Rooms(4);
console.log(r1)
console.log(r1.capacity);