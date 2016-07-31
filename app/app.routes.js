"use strict";
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var login_1 = require("./pages/login/login");
//import {AuthGuard} from "./auth.guard";
exports.routes = [
    { path: "", component: app_component_1.AppComponent },
    { path: "login", component: login_1.LoginComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, { enableTracing: false }) //,
];
//# sourceMappingURL=app.routes.js.map