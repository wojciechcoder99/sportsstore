import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [{ provide: StaticDataSource, useClass: RestDataSource }, RestDataSource]
})

export class DatabasesModule { }