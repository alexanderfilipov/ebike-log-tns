import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "../../shared/backend.service";
import { Log } from "../../model/log"

@Component({
    selector: "my-app",
    providers: [BackendService],
    templateUrl: "pages/logs/logs.html",
})
export class LogsComponent {

    constructor(private router: Router, private backend: BackendService) {
    }

    load() {
        this.backend.getCharges();
    }

    showLogin() {
        this.router.navigate(["/login"])
        console.log("login opened");
    }

    showAdd() {
        this.router.navigate(["/add"])
        console.log("add opened");
    }
}
