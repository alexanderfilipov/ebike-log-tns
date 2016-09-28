"use strict";
var login_component_1 = require("./pages/login/login.component");
var logs_component_1 = require("./pages/logs/logs.component");
var add_component_1 = require("./pages/add/add.component");
exports.appRoutes = [
    { path: "", component: logs_component_1.LogsComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "add", component: add_component_1.AddComponent }
];
//# sourceMappingURL=app.routing.js.map