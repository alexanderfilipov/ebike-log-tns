import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject } from "rxjs/Rx";
import { getString, setString } from "application-settings";
import { Log } from "../model/log"

var Everlive = require('./../everlive.all.min');

@Injectable()
export class BackendService {

  static el = new Everlive({
    apiKey: "enf8m56ytnvo8sbn",
    offlineStorage: true
  });

  charges: BehaviorSubject<Array<Log>> = new BehaviorSubject([]);

  private logs: Array<Log> = [];

  constructor(private zone: NgZone) {
  }

  static get token():string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }

  static hasActiveToken() {
    return !!getString("token");
  }

  static invalidateToken() {
    BackendService.token = "";
  }

  login(user, pass) {
    return BackendService.el.authentication.login(user, pass).then((data) => {
      BackendService.token = data.result.access_token;
      return Promise.resolve();
    }).catch(this.handleErrors);
  }

  getCharges() {
    return BackendService.el.data("charges")
      .withHeaders({ "X-Everlive-Sort": JSON.stringify({ CreatedAt: -1 }) }) //, "X-Everlive-Take": 5
      .get()
      .then((data) => {
        this.logs = data.result;

        this.publishUpdates();
        return Promise.resolve(this.logs);
      })
      .catch(this.handleErrors);
  }

  createCharge(log: Log){
    return BackendService.el.data('charges').create(log)
    .then((data) => {
        return Promise.resolve(data);
      })
      .catch(this.handleErrors);
  }

  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }

  private publishUpdates() {
    this.charges.next([...this.logs]);
  }
}