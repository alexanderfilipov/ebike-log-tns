import {Injectable} from "@angular/core";
import {getString, setString} from "application-settings";
import {Log} from "../model/log"
import oa = require("data/observable-array");
var Everlive = require('./../everlive.all.min');

@Injectable()
export class BackendService {

  static el = new Everlive({
    apiKey: "enf8m56ytnvo8sbn",
    offlineStorage: true
  });

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
      .withHeaders({ "X-Everlive-Sort": JSON.stringify({ CreatedAt: -1 }) })
      .get()
      .then((data) => {
        var logs = new oa.ObservableArray<Log>();

        data.result.forEach((item) => {
          var log = new Log();
          log.id = item.Id
          log.cycleNumber = item.CycleNumber
          log.odometer = item.Odometer;
          logs.push(log);
        });

        return Promise.resolve(logs);
      })
      .catch(this.handleErrors);
  }

  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }
}