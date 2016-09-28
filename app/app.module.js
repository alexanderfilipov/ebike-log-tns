"use strict";
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var backend_service_1 = require("./shared/backend.service");
var login_component_1 = require("./pages/login/login.component");
var logs_component_1 = require("./pages/logs/logs.component");
var add_component_1 = require("./pages/add/add.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                backend_service_1.BackendService
            ],
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                logs_component_1.LogsComponent,
                login_component_1.LoginComponent,
                add_component_1.AddComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map