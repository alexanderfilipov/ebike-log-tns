"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_routes_1 = require("./app.routes");
var angular_1 = require('nativescript-telerik-ui/listview/angular');
var angular_2 = require("nativescript-telerik-ui/sidedrawer/angular");
var app_component_1 = require("./app.component");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [app_routes_1.APP_ROUTER_PROVIDERS, angular_1.LISTVIEW_PROVIDERS, angular_2.SIDEDRAWER_PROVIDERS]);
//# sourceMappingURL=main.js.map