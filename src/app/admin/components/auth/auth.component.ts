import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestDataSource } from 'src/app/database/rest.datasource';
import { AuthService } from 'src/app/services/auth.service';
import { StringUtils } from 'src/app/utils/StringUtils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public username: string | null = null;
  public password: string | null = null;
  public error: string | null = null;


  constructor(private router: Router, private authService: AuthService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password).subscribe(response => {
        if (response) {
          this.router.navigateByUrl("/admin/main");
        }
        this.error = StringUtils.LOGIN_FAILED;
      })
    }
    else {
      this.error = StringUtils.INCORRECT_DATA;
    }
  }

}
