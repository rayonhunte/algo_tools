// instance of numbers only class
var NumbersOnly = /** @class */ (function () {
    function NumbersOnly() {
    }
    NumbersOnly.prototype.SetNumber = function (someNumber) {
        this.count = someNumber;
    };
    return NumbersOnly;
}());
// class instance
var onlyNumbers = new NumbersOnly;
// method with incorrect arguments
onlyNumbers.SetNumber("15");
