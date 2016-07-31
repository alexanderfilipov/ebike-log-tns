import {Component} from "@angular/core";
import oa = require("data/observable-array");

@Component({
    selector: "my-app",
    templateUrl: "pages/login/login.html",
})
export class LoginComponent {
  onLogin() {
    console.log("hello");
  }
}