import {Component} from "@angular/core";
import {Router} from "@angular/router";
import oa = require("data/observable-array");
import {BackendService} from "../../shared/backend.service";
import {Log} from "../../model/log"

@Component({
  selector: "my-app",
  providers: [BackendService],
  templateUrl: "pages/add/add.html",
})
export class AddComponent {
  odometer = 0;

  constructor(private router: Router, private backend: BackendService) {
  }

  onSave() {
    var log = new Log();
    log.Odometer = this.odometer;
    log.FullyCharged = true;
    log.WasEmpty = false;
    log.ChargedAt = new Date();

    console.log(JSON.stringify(log));

    this.backend.createCharge(log)
    .then(() => {
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
    });
  }
}
