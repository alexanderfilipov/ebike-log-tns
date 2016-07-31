import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {AppComponent} from "./app.component";
import {LoginComponent} from "./pages/login/login";
//import {AuthGuard} from "./auth.guard";

export const routes: RouterConfig = [
  { path: "", component: AppComponent }, //, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false }) //,
  //AuthGuard
];