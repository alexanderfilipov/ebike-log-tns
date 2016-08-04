import {Component} from "@angular/core";
import oa = require("data/observable-array");
import {BackendService} from "../../services/backend.service";

@Component({
    selector: "my-app",
    templateUrl: "pages/login/login.html",
})
export class LoginComponent {
  username='';
  password='';

  constructor(private backend: BackendService){

  }

  onLogin() {
    this.backend.login(this.username, this.password)
    .then((data) => {
        alert(JSON.stringify(data));
      })
      .catch((error) => {
        alert(JSON.stringify(error));
	});
  }
}