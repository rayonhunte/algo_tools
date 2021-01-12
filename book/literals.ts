// string literal  
type Yea = "yes";

// number literal
type One = 1;


// process my literal 
function yesOne(yes: Yea, one: One ) {
    console.log(yes, one)
}

// yesOne("yes", 1) 


// create a string literal
type No = "no"

// function that takes type no
function onlyNo(no: No) {
    console.log(no)
}

// class the onlyNo function pass in the string no
onlyNo("no")

