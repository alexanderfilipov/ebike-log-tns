import {Component} from "@angular/core";
import {Router} from "@angular/router";
import oa = require("data/observable-array");
import {BackendService} from "../../services/backend.service";
import {Log} from "../../model/log"

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
        this.backend.getCharges().then((logs) => { this._dataItems = logs} );
    }

    showLogin() {
        this.router.navigate(["/login"])
        console.log("login opened");
    }
}
