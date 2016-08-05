"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../services/backend.service");
var LoginComponent = (function () {
    function LoginComponent(router, backend) {
        this.router = router;
        this.backend = backend;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.backend.login(this.username, this.password)
            .then(function () {
            _this.router.navigate(["/"]);
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [backend_service_1.BackendService],
            templateUrl: "pages/login/login.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map