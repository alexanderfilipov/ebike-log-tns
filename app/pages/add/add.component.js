"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../shared/backend.service");
var log_1 = require("../../model/log");
var AddComponent = (function () {
    function AddComponent(router, backend) {
        this.router = router;
        this.backend = backend;
        this.log = new log_1.Log();
        //this.log.FullyCharged = true;
    }
    AddComponent.prototype.onSave = function () {
        console.log(JSON.stringify(this.log));
        /*this.backend.createCharge(log)
        .then(() => {
            this.router.navigate(["/"]);
          })
          .catch((error) => {
            alert(JSON.stringify(error));
        });
        */
    };
    return AddComponent;
}());
AddComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [backend_service_1.BackendService],
        templateUrl: "pages/add/add.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, backend_service_1.BackendService])
], AddComponent);
exports.AddComponent = AddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsMENBQXlDO0FBQ3pDLGdFQUE4RDtBQUM5RCx1Q0FBcUM7QUFPckMsSUFBYSxZQUFZO0lBR3ZCLHNCQUFvQixNQUFjLEVBQVUsT0FBdUI7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRm5FLFFBQUcsR0FBUSxJQUFJLFNBQUcsRUFBRSxDQUFDO1FBR25CLCtCQUErQjtJQUNqQyxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0Qzs7Ozs7OztVQU9FO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzNCLFdBQVcsRUFBRSxvQkFBb0I7S0FDbEMsQ0FBQztxQ0FJNEIsZUFBTSxFQUFtQixnQ0FBYztHQUh4RCxZQUFZLENBbUJ4QjtBQW5CWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4uLy4uL21vZGVsL2xvZ1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbQmFja2VuZFNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9hZGQvYWRkLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQWRkQ29tcG9uZW50IHtcbiAgbG9nOiBMb2cgPSBuZXcgTG9nKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBiYWNrZW5kOiBCYWNrZW5kU2VydmljZSkge1xuICAgIC8vdGhpcy5sb2cuRnVsbHlDaGFyZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uU2F2ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxvZykpO1xuXG4gICAgLyp0aGlzLmJhY2tlbmQuY3JlYXRlQ2hhcmdlKGxvZylcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICB9KTtcbiAgICAqL1xuICB9XG59XG4iXX0=