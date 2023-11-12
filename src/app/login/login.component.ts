import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  loginForm = this.builder.group({
    userName: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.Login(this.loginForm.value).subscribe((res: any) => {
        var jwt = res['token'];
        console.log(jwt);
        sessionStorage.setItem('jwt', jwt);
        this.toastr.success('Login Successfully');
        this.router.navigate(['']);
      });
    } else {
      this.toastr.warning('Invalid Credentials');
    }
  }
}
