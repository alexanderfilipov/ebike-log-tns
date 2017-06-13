"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../shared/backend.service");
var LogsComponent = (function () {
    function LogsComponent(router, backend) {
        this.router = router;
        this.backend = backend;
    }
    LogsComponent.prototype.load = function () {
        this.backend.getCharges();
    };
    LogsComponent.prototype.showLogin = function () {
        this.router.navigate(["/login"]);
        console.log("login opened");
    };
    LogsComponent.prototype.showAdd = function () {
        this.router.navigate(["/add"]);
        console.log("add opened");
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [backend_service_1.BackendService],
        templateUrl: "pages/logs/logs.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, backend_service_1.BackendService])
], LogsComponent);
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsZ0VBQThEO0FBUTlELElBQWEsYUFBYTtJQUV0Qix1QkFBb0IsTUFBYyxFQUFVLE9BQXVCO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUNuRSxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUMzQixXQUFXLEVBQUUsc0JBQXNCO0tBQ3RDLENBQUM7cUNBRzhCLGVBQU0sRUFBbUIsZ0NBQWM7R0FGMUQsYUFBYSxDQWtCekI7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4uLy4uL21vZGVsL2xvZ1wiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHByb3ZpZGVyczogW0JhY2tlbmRTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dzL2xvZ3MuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dzQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYmFja2VuZDogQmFja2VuZFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmJhY2tlbmQuZ2V0Q2hhcmdlcygpO1xuICAgIH1cblxuICAgIHNob3dMb2dpbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKVxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIG9wZW5lZFwiKTtcbiAgICB9XG5cbiAgICBzaG93QWRkKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRkXCJdKVxuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBvcGVuZWRcIik7XG4gICAgfVxufVxuIl19