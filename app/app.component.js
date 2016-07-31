"use strict";
var core_1 = require("@angular/core");
var oa = require("data/observable-array");
var AppComponent = (function () {
    function AppComponent() {
        console.log("constructor called");
    }
    Object.defineProperty(AppComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        //this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
        console.log("on init");
        this._dataItems = new oa.ObservableArray();
        for (var i = 0; i < 10; i++) {
            this._dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var DataItem = (function () {
    function DataItem(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
//# sourceMappingURL=app.component.js.map