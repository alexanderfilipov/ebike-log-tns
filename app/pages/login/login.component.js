"use strict";
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.onLogin = function () {
        console.log("hello");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/login/login.html",
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map