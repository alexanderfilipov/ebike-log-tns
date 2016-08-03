import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {LoginComponent} from "./pages/login/login.component";
import {LogsComponent} from "./pages/logs/logs.component";
//import {AuthGuard} from "./auth.guard";

export const routes: RouterConfig = [
  { path: "", component: LogsComponent }, //, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false }) //,
  //AuthGuard
];
