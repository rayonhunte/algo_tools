// primitive type assignment 
type One = number;

// complex (object assignment)
type Admin = {
    username: string,
    email: string,
    userId: string,
    AllowedPages: string   
}

// object / complex type User
type User = {
    email: string,
    userName: string,
    token: string, 
    lastLogin: number
}


// OnlyNumbers type alias
type OnlyNumbers = number;


// instance of numbers only class
class NumbersOnly {
    count: number

    SetNumber(someNumber: OnlyNumbers) {
        this.count = someNumber
    }
}

// user class
class UsersOnly {
    user: User;

    SetUser(user: User) {
        this.user = user;
    }
}


// class instance
const onlyNumbers = new NumbersOnly;

// method with incorrect arguments
onlyNumbers.SetNumber(15)


// class instance 
const onlyUsers =  new UsersOnly;

// wrong user data
const wrongUser = {
    userName: "mark",
    email: "wrong@wrong",
}

// passing the wrong user
onlyUsers.SetUser(wrongUser); 

// right User object 
const rightUser = {
    email: "right@home.com",
    userName: "right123",
    token: "12345678lll", 
    lastLogin: 123456789
}

// passing the right user
onlyUsers.SetUser(rightUser)

// function and type definition  
function badCode(user: {
    email: string,
    userName: string,
    token: string, 
    lastLogin: number
}) {}

badCode(rightUser)

// function with type alias
function goodCode(user: User){}