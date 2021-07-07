class User {
    name: string
    email: string
}


class Student extends User {
    type: string
}


type onlyString = {
    name: string, 
    age: number
}


const p = (name: onlyString) => {
    if(name.name === 'rayon') {
        return name
    } else {
        return false
    }
}
p({
    name: 'mark',
    age: 654
})
// p(57) //?