import { NgModule } from "@angular/core";
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin-details/admin.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { StaticDataSource } from "../database/static.datasource";
import { RestDataSource } from "../database/rest.datasource";
import { AuthService } from "../services/auth.service";
import { AuthGuard } from "../guards/auth.guard";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [
        AuthComponent,
        AdminComponent
    ],
    providers: [AuthService, AuthGuard]
})

export class AdminModule { }