import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs/Rx";
import { Router } from "@angular/router";
import { BackendService } from "../../shared/backend.service";
import { Log } from "../../model/log"

@Component({
  selector: "my-app",
  providers: [BackendService],
  templateUrl: "pages/add/add.html",
})
export class AddComponent {
  log: Log = new Log();

  constructor(private router: Router, private backend: BackendService) {
    //this.log.FullyCharged = true;
  }

  onSave() {
    console.log(JSON.stringify(this.log));

    /*this.backend.createCharge(log)
    .then(() => {
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
    });
    */
  }
}
