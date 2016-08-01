// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {LISTVIEW_PROVIDERS} from 'nativescript-telerik-ui/listview/angular';
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui/sidedrawer/angular";
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent, [APP_ROUTER_PROVIDERS, LISTVIEW_PROVIDERS, SIDEDRAWER_PROVIDERS]);
