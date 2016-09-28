import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "../../shared/backend.service";
import { Log } from "../../model/log"
import oa = require("data/observable-array");

@Component({
    selector: "my-app",
    providers: [BackendService],
    templateUrl: "pages/logs/logs.html",
})
export class LogsComponent {
    private _dataItems: oa.ObservableArray<Log>;

    constructor(private router: Router, private backend: BackendService) {
    }

    get dataItems(): oa.ObservableArray<Log> {
        return this._dataItems;
    }

    ngOnInit() {
        console.log("on init");
        this.backend.getCharges().then((logs) => {
            console.log('yes!'); 
            this._dataItems = logs; 
            console.log(this._dataItems.toString());
        });
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
