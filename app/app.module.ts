import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { BackendService } from "./shared/backend.service";

import { LoginComponent } from "./pages/login/login.component";
import { LogsComponent } from "./pages/logs/logs.component";
import { AddComponent } from "./pages/add/add.component";

@NgModule({
  providers: [
    BackendService
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(AppRoutingModule),
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    LogsComponent,
    LoginComponent,
    AddComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }