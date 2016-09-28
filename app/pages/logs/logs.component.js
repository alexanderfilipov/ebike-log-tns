"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../shared/backend.service");
var LogsComponent = (function () {
    function LogsComponent(router, backend) {
        this.router = router;
        this.backend = backend;
    }
    LogsComponent.prototype.load = function () {
        this.backend.getCharges();
    };
    LogsComponent.prototype.showLogin = function () {
        this.router.navigate(["/login"]);
        console.log("login opened");
    };
    LogsComponent.prototype.showAdd = function () {
        this.router.navigate(["/add"]);
        console.log("add opened");
    };
    LogsComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [backend_service_1.BackendService],
            templateUrl: "pages/logs/logs.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendService])
    ], LogsComponent);
    return LogsComponent;
}());
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=logs.component.js.map