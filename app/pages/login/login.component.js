"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../shared/backend.service");
var LoginComponent = (function () {
    function LoginComponent(router, backend) {
        this.router = router;
        this.backend = backend;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.backend.login(this.username, this.password)
            .then(function () {
            _this.router.navigate(["/"]);
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [backend_service_1.BackendService],
        templateUrl: "pages/login/login.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, backend_service_1.BackendService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDBDQUF1QztBQUN2QyxnRUFBNEQ7QUFPNUQsSUFBYSxjQUFjO0lBSXpCLHdCQUFvQixNQUFjLEVBQVUsT0FBdUI7UUFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSG5FLGFBQVEsR0FBQyxFQUFFLENBQUM7UUFDWixhQUFRLEdBQUMsRUFBRSxDQUFDO0lBR1osQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMvQyxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDM0IsV0FBVyxFQUFFLHdCQUF3QjtLQUN4QyxDQUFDO3FDQUs0QixlQUFNLEVBQW1CLGdDQUFjO0dBSnhELGNBQWMsQ0FnQjFCO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9iYWNrZW5kLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgcHJvdmlkZXJzOiBbQmFja2VuZFNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICB1c2VybmFtZT0nJztcbiAgcGFzc3dvcmQ9Jyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBiYWNrZW5kOiBCYWNrZW5kU2VydmljZSl7XG4gIH1cblxuICBvbkxvZ2luKCkge1xuICAgIHRoaXMuYmFja2VuZC5sb2dpbih0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgIH0pO1xuICB9XG59Il19