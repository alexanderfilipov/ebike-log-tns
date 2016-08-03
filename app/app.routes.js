"use strict";
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var logs_component_1 = require("./pages/logs/logs.component");
//import {AuthGuard} from "./auth.guard";
exports.routes = [
    { path: "", component: logs_component_1.LogsComponent },
    { path: "login", component: login_component_1.LoginComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, { enableTracing: false }) //,
];
//# sourceMappingURL=app.routes.js.map