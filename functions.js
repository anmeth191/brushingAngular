function getSum(x, y, z) {
    return x + y + z;
}
getSum(1, 2, 3);
var getSum2 = function (x, y, z) {
    return x + y + z;
};
getSum2(1, 1, 1);
var User = /** @class */ (function () {
    function User(nombre, apellido, edad) {
        this.name = nombre;
        this.lastName = apellido;
        this.age = edad;
    }
    User.prototype.showMessage = function () {
        console.log("Hello " + this.name);
    };
    return User;
}());
var newUser = new User('Angel', 'Rivera', 29);
console.log("Hello " + newUser.name + " your age is " + newUser.age);
