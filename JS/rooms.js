class Rooms {

    id = new Date().getTime();

    constructor(capacity = 2,category ='eco',rate = 100){
        this.capacity = capacity;
        this.category = category;
        this.rate = rate;
    }

}

module.exports =  Rooms;