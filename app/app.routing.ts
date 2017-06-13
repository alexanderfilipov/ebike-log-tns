import {LoginComponent} from "./pages/login/login.component";
import {LogsComponent} from "./pages/logs/logs.component";
import {AddComponent} from "./pages/add/add.component";

export const AppRoutingModule = [
  { path: "", component: LogsComponent },
  { path: "login", component: LoginComponent },
  { path: "add", component: AddComponent }
];
