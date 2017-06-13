"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var application_settings_1 = require("application-settings");
var Everlive = require('./../everlive.all.min');
var BackendService = BackendService_1 = (function () {
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
        BackendService_1.token = "";
    };
    BackendService.prototype.login = function (user, pass) {
        return BackendService_1.el.authentication.login(user, pass).then(function (data) {
            BackendService_1.token = data.result.access_token;
            return Promise.resolve();
        }).catch(this.handleErrors);
    };
    BackendService.prototype.getCharges = function () {
        var _this = this;
        return BackendService_1.el.data("charges")
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
        return BackendService_1.el.data('charges').create(log)
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
    return BackendService;
}());
BackendService.el = new Everlive({
    apiKey: "enf8m56ytnvo8sbn",
    offlineStorage: true
});
BackendService = BackendService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], BackendService);
exports.BackendService = BackendService;
var BackendService_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELDhCQUEwQztBQUMxQyw2REFBNEQ7QUFHNUQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFHaEQsSUFBYSxjQUFjO0lBV3pCLHdCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUpoQyxZQUFPLEdBQWdDLElBQUksb0JBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RCxTQUFJLEdBQWUsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFpQixRQUFnQjtZQUMvQixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQU1NLDZCQUFjLEdBQXJCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSw4QkFBZSxHQUF0QjtRQUNFLGdCQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLElBQUksRUFBRSxJQUFJO1FBQ2QsTUFBTSxDQUFDLGdCQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDbEUsZ0JBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQUEsaUJBV0M7UUFWQyxNQUFNLENBQUMsZ0JBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNyQyxXQUFXLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsd0JBQXdCO2FBQzlGLEdBQUcsRUFBRTthQUNMLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsR0FBUTtRQUNuQixNQUFNLENBQUMsZ0JBQWMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDbkQsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU8sdUNBQWMsR0FBdEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBSyxJQUFJLENBQUMsSUFBSSxTQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQztBQWhFUSxpQkFBRSxHQUFHLElBQUksUUFBUSxDQUFDO0lBQ3ZCLE1BQU0sRUFBRSxrQkFBa0I7SUFDMUIsY0FBYyxFQUFFLElBQUk7Q0FDckIsQ0FBQyxDQUFDO0FBTFEsY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQVllLGFBQU07R0FYckIsY0FBYyxDQWtFMUI7QUFsRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi4vbW9kZWwvbG9nXCJcblxudmFyIEV2ZXJsaXZlID0gcmVxdWlyZSgnLi8uLi9ldmVybGl2ZS5hbGwubWluJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cbiAgc3RhdGljIGVsID0gbmV3IEV2ZXJsaXZlKHtcbiAgICBhcGlLZXk6IFwiZW5mOG01Nnl0bnZvOHNiblwiLFxuICAgIG9mZmxpbmVTdG9yYWdlOiB0cnVlXG4gIH0pO1xuXG4gIGNoYXJnZXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxMb2c+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIHByaXZhdGUgbG9nczogQXJyYXk8TG9nPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gIH1rXG5cbiAgc3RhdGljIGdldCB0b2tlbigpOnN0cmluZyB7XG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xuICB9XG5cbiAgc3RhdGljIHNldCB0b2tlbih0aGVUb2tlbjogc3RyaW5nKSB7XG4gICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdGhlVG9rZW4pO1xuICB9XG5cbiAgc3RhdGljIGhhc0FjdGl2ZVRva2VuKCkge1xuICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xuICB9XG5cbiAgc3RhdGljIGludmFsaWRhdGVUb2tlbigpIHtcbiAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gIH1cblxuICBsb2dpbih1c2VyLCBwYXNzKSB7XG4gICAgcmV0dXJuIEJhY2tlbmRTZXJ2aWNlLmVsLmF1dGhlbnRpY2F0aW9uLmxvZ2luKHVzZXIsIHBhc3MpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gZGF0YS5yZXN1bHQuYWNjZXNzX3Rva2VuO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGdldENoYXJnZXMoKSB7XG4gICAgcmV0dXJuIEJhY2tlbmRTZXJ2aWNlLmVsLmRhdGEoXCJjaGFyZ2VzXCIpXG4gICAgICAud2l0aEhlYWRlcnMoeyBcIlgtRXZlcmxpdmUtU29ydFwiOiBKU09OLnN0cmluZ2lmeSh7IENyZWF0ZWRBdDogLTEgfSkgfSkgLy8sIFwiWC1FdmVybGl2ZS1UYWtlXCI6IDVcbiAgICAgIC5nZXQoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5sb2dzID0gZGF0YS5yZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMubG9ncyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGNyZWF0ZUNoYXJnZShsb2c6IExvZyl7XG4gICAgcmV0dXJuIEJhY2tlbmRTZXJ2aWNlLmVsLmRhdGEoJ2NoYXJnZXMnKS5jcmVhdGUobG9nKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdWJsaXNoVXBkYXRlcygpIHtcbiAgICB0aGlzLmNoYXJnZXMubmV4dChbLi4udGhpcy5sb2dzXSk7XG4gIH1cbn0iXX0=