//using class and inheritance 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserDe = /** @class */ (function () {
    function UserDe(nombre, apellido, edad) {
        this.name = nombre;
        this.lastName = apellido;
        this.age = edad;
    }
    UserDe.prototype.showUserInfo = function () {
        console.log("Hello " + this.name + " " + this.name + " your age is " + this.age);
    };
    return UserDe;
}());
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job(posicion, turno, nombre, apellido, edad) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.position = posicion;
        _this.shift = turno;
        _this.name = nombre;
        _this.lastName = apellido;
        _this.age = edad;
        return _this;
    }
    Job.prototype.showUser = function () {
        console.log("Employee " + this.name + " " + this.lastName + " works in " + this.position + " in " + this.shift + " shift");
    };
    return Job;
}(UserDe)); // end of the Job Class
var newEmployee = new UserDe('Angel', 'Rivera', 29);
newEmployee.showUserInfo();
var newJob = new Job('INVENTORY', 1, 'Angel', 'Rivera', 29);
newJob.showUser();
