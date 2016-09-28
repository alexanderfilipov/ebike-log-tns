"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
//import {nativeScriptBootstrap} from "nativescript-angular/application";
var platform_1 = require("nativescript-angular/platform");
//import {APP_ROUTER_PROVIDERS} from "./app.routes";
//import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui/listview/angular';
//import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui/sidedrawer/angular";
//import {AppComponent} from "./app.component";
var app_module_1 = require("./app.module");
//nativeScriptBootstrap(AppComponent, [APP_ROUTER_PROVIDERS, LISTVIEW_PROVIDERS, SIDEDRAWER_PROVIDERS]);
//nativeScriptBootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map