"use strict";
var core_1 = require("@angular/core");
var backend_service_1 = require("../../services/backend.service");
var LoginComponent = (function () {
    function LoginComponent(backend) {
        this.backend = backend;
        this.username = 'alf';
        this.password = '123456';
    }
    LoginComponent.prototype.onLogin = function () {
        this.backend.login(this.username, this.password)
            .then(function (data) {
            alert(JSON.stringify(data));
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/login/login.html",
        }), 
        __metadata('design:paramtypes', [backend_service_1.BackendService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map