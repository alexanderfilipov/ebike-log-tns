"use strict";
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var application_settings_1 = require("application-settings");
var Everlive = require('./../everlive.all.min');
var BackendService = (function () {
    function BackendService(zone) {
        this.zone = zone;
        this.charges = new Rx_1.BehaviorSubject([]);
        this.logs = [];
    }
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService.hasActiveToken = function () {
        return !!application_settings_1.getString("token");
    };
    BackendService.invalidateToken = function () {
        BackendService.token = "";
    };
    BackendService.prototype.login = function (user, pass) {
        return BackendService.el.authentication.login(user, pass).then(function (data) {
            BackendService.token = data.result.access_token;
            return Promise.resolve();
        }).catch(this.handleErrors);
    };
    BackendService.prototype.getCharges = function () {
        var _this = this;
        return BackendService.el.data("charges")
            .withHeaders({ "X-Everlive-Sort": JSON.stringify({ CreatedAt: -1 }) }) //, "X-Everlive-Take": 5
            .get()
            .then(function (data) {
            _this.logs = data.result;
            _this.publishUpdates();
            return Promise.resolve(_this.logs);
        })
            .catch(this.handleErrors);
    };
    BackendService.prototype.createCharge = function (log) {
        return BackendService.el.data('charges').create(log)
            .then(function (data) {
            return Promise.resolve(data);
        })
            .catch(this.handleErrors);
    };
    BackendService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    BackendService.prototype.publishUpdates = function () {
        this.charges.next(this.logs.slice());
    };
    BackendService.el = new Everlive({
        apiKey: "enf8m56ytnvo8sbn",
        offlineStorage: true
    });
    BackendService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.service.js.map