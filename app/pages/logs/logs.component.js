"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var oa = require("data/observable-array");
var LogsComponent = (function () {
    function LogsComponent(_router) {
        this._router = _router;
        console.log("constructor called");
    }
    Object.defineProperty(LogsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    LogsComponent.prototype.ngOnInit = function () {
        //this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
        console.log("on init");
        this._dataItems = new oa.ObservableArray();
        for (var i = 0; i < 10; i++) {
            this._dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    };
    LogsComponent.prototype.showLogin = function () {
        this._router.navigate(["/login"]);
        console.log("login opened");
    };
    LogsComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/logs/logs.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LogsComponent);
    return LogsComponent;
}());
exports.LogsComponent = LogsComponent;
var DataItem = (function () {
    function DataItem(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
//# sourceMappingURL=logs.component.js.map