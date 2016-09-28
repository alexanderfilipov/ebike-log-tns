"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../shared/backend.service");
var log_1 = require("../../model/log");
var AddComponent = (function () {
    function AddComponent(router, backend) {
        this.router = router;
        this.backend = backend;
        this.odometer = 0;
    }
    AddComponent.prototype.onSave = function () {
        var _this = this;
        var log = new log_1.Log();
        log.Odometer = this.odometer;
        log.FullyCharged = true;
        log.WasEmpty = false;
        log.ChargedAt = new Date();
        console.log(JSON.stringify(log));
        this.backend.createCharge(log)
            .then(function () {
            _this.router.navigate(["/"]);
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
        });
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [backend_service_1.BackendService],
            templateUrl: "pages/add/add.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, backend_service_1.BackendService])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map