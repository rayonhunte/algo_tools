type point = {
    lat: number,
    lng: number
}

type limit = 1 | 2

class myHouse  {
    lat: limit
    lng: limit

    constructor(lat: limit, lng: limit) {
        this.point = {lat, lng}
    }
    height: number
    width: number
    uid: string
    point: point 
}

const newHouse = new myHouse(1,2)