import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";

@Component({
    selector: "my-app",
    providers: [BackendService],
    templateUrl: "pages/login/login.html",
})
export class LoginComponent {
  username='';
  password='';

  constructor(private router: Router, private backend: BackendService){
  }

  onLogin() {
    this.backend.login(this.username, this.password)
    .then(() => {
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
	});
  }
}