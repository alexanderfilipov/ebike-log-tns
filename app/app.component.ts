import {Component} from "@angular/core";
import oa = require("data/observable-array");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    private _dataItems: oa.ObservableArray<DataItem>;

    constructor() { //private _dataItemService: DataItemService) {
        console.log("constructor called");
    }

    get dataItems(): oa.ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        //this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
        console.log("on init");
        this._dataItems = new oa.ObservableArray<DataItem>();
        for (var i = 0; i < 10; i++) {
            this._dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    }
}

export class DataItem {
    public id: number;
    public name;
    public description;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}