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
import { ProductEditorComponent } from './components/product-managment/product-editor/product-editor.component';
import { ProductTableComponent } from './components/product-managment/product-table/product-table.component';
import { OrderTableComponent } from './components/order-managment/order-table/order-table.component';

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard], children: [
            { path: "products/:mode/:id", component: ProductEditorComponent },
            { path: "products/:mode", component: ProductEditorComponent },
            { path: "products", component: ProductTableComponent },
            { path: "orders", component: OrderTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [
        AuthComponent,
        AdminComponent,
        ProductEditorComponent,
        ProductTableComponent,
        OrderTableComponent
    ],
    providers: [AuthService, AuthGuard]
})

export class AdminModule { }