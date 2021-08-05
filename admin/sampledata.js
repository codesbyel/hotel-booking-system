function Room(roomtype,desc,price){
    return {roomtype,desc,price};
}

const room = [
    Room('Single Room','1 Single Bed\nFully Equiped bathroom\nFree Wifi',80.00),
    Room('Deluxe Double Room','2 Single Bed\nFully Equiped Bathroom\nMinibar\nFree Wifi',135.00),
    Room('Family Room','2 Queen Size Bed\nFully Equiped Bathroom\nMinibar\nFree Wifi',135.00)
];


const roomcnt = [
    {
        roomtype:"Single room",
        cnt : 20
    },
    {
        roomtype:"Double room",
        cnt : 20
    },
    {
        roomtype:"Family room",
        cnt : 20
    }
]



