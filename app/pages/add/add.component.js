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
        this.log.WasEmpty = false;
        this.log.FullyCharged = true;
    }
    AddComponent.prototype.onSave = function () {
        var _this = this;
        if (!this.log.Odometer) {
            alert("Odometer is required!");
            return;
        }
        //Fix from string to number
        this.log.Odometer = parseInt(this.log.Odometer.toString());
        console.log("Saving new log: " + JSON.stringify(this.log));
        this.backend.createCharge(this.log)
            .then(function () {
            _this.router.navigate(["/"]);
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
            return;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsMENBQXlDO0FBQ3pDLGdFQUE4RDtBQUM5RCx1Q0FBcUM7QUFPckMsSUFBYSxZQUFZO0lBR3ZCLHNCQUFvQixNQUFjLEVBQVUsT0FBdUI7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRm5FLFFBQUcsR0FBUSxJQUFJLFNBQUcsRUFBRSxDQUFDO1FBR25CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFBQSxpQkFtQkM7UUFsQkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDckIsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUzRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNsQyxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDM0IsV0FBVyxFQUFFLG9CQUFvQjtLQUNsQyxDQUFDO3FDQUk0QixlQUFNLEVBQW1CLGdDQUFjO0dBSHhELFlBQVksQ0E0QnhCO0FBNUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb2cgfSBmcm9tIFwiLi4vLi4vbW9kZWwvbG9nXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtCYWNrZW5kU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2FkZC9hZGQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRDb21wb25lbnQge1xuICBsb2c6IExvZyA9IG5ldyBMb2coKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGJhY2tlbmQ6IEJhY2tlbmRTZXJ2aWNlKSB7XG4gICAgdGhpcy5sb2cuV2FzRW1wdHkgPSBmYWxzZTtcbiAgICB0aGlzLmxvZy5GdWxseUNoYXJnZWQgPSB0cnVlO1xuICB9XG5cbiAgb25TYXZlKCkge1xuICAgIGlmKCF0aGlzLmxvZy5PZG9tZXRlcil7XG4gICAgICBhbGVydChcIk9kb21ldGVyIGlzIHJlcXVpcmVkIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL0ZpeCBmcm9tIHN0cmluZyB0byBudW1iZXJcbiAgICB0aGlzLmxvZy5PZG9tZXRlciA9IHBhcnNlSW50KHRoaXMubG9nLk9kb21ldGVyLnRvU3RyaW5nKCkpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiU2F2aW5nIG5ldyBsb2c6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2cpKTtcblxuICAgIHRoaXMuYmFja2VuZC5jcmVhdGVDaGFyZ2UodGhpcy5sb2cpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxufVxuIl19