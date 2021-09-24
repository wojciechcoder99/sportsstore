import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "../database/rest.datasource";

@Injectable()
export class AuthService {
    constructor(private restDataSource: RestDataSource) { }

    authenticate(username: string | null, password: string | null): Observable<boolean> {
        return this.restDataSource.authenticate(username, password);
    }

    get authenticated(): boolean {
        return this.restDataSource.auth_token != null;
    }

    clear(): void {
        this.restDataSource.auth_token = null;
    }
}