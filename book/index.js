// message object of Index type ErrorMessage
var errorMessage = {
    0: "system error",
    1: "overload",
    apiId: 12345
};
// console out object
console.log(errorMessage);
// function that takes an error index and returns the error
function processError(e) {
    if (e[400]) {
        return e[400];
    }
    else if (e[401]) {
        return e[401];
    }
    else if (e[403]) {
        return e[403];
    }
    else {
        return "undefined message";
    }
}
//error message from a api
var httpErrors = [
    { 400: 'bad request', apiId: 123456 },
    { 401: 'unauthorized', apiId: 123456 },
    { 403: 'forbidden', apiId: 123456 },
];
// write error messages to the console
httpErrors.forEach(function (e) {
    console.log(processError(e));
});
