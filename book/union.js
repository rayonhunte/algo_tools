// 
function myAge(age) {
    if (typeof age === "number") {
        return "my age is " + age + " and this a number";
    }
    else {
        return "my age is " + age + " and this a string";
    }
}
console.log(myAge(45));
console.log(myAge('45'));
