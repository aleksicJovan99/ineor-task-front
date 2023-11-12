import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  registerform = this.builder.group({
    fullName: this.builder.control('', Validators.required),
    username: this.builder.control('', Validators.required),
    password: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[0-9]).{6,}$'),
      ])
    ),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    roles: this.builder.control('', Validators.required),
  });

  proceedRegistration() {
    var inputForm = {
      fullName: this.registerform.value.fullName,
      userName: this.registerform.value.username,
      password: this.registerform.value.password,
      email: this.registerform.value.email,
      roles: [this.registerform.value.roles],
    };
    if (this.registerform.valid) {
      this.service.Registration(inputForm).subscribe((res) => {
        this.toastr.success('Registered Successfully');
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }
}
