import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { fbind } from 'q';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private signIn = true;
  private signUpForm: FormGroup;
  public loading = false;

  constructor(
      public fb: FormBuilder,
      public loginService: LoginService,
      public router: Router,
      private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.buildLoginForm();
    this.buildSignUpForm();
  }
  private buildLoginForm(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]],
      password: ['', [Validators.required , Validators.minLength(6)]],
    });
  }
  private buildSignUpForm(): void {
    this.signUpForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
    });
  }
  public login(): void {
    const { login , password } = this.loginForm.value;
    this.loading = true;
    this.loginService
        .login(login, password)
        .then((data) => {
            this.toastrService.success('Welcome to your office');
            this.router.navigate(['admin']);
            this.loading = false;
        })
        .catch((error) => {
          this.toastrService.error(error.message, 'I dont know you!');
          this.loading = false;
        });
    }
  public changeForm(): void {
    this.signIn = !this.signIn;

  }
  public signUp(): void {
    this.loading = true;
    const{login, password, name} = this.signUpForm.value;
    this.loginService.signUp(login, password, name)
    .then((data: firebase.auth.UserCredential) => {
      this.loginService.addUser({name, email: login}, data.user.uid)
      .then(() => {
        this.toastrService.success('Congratulations, you are registered');
        this.changeForm();
        this.loading = false;
      }).catch((error) => {
        this.toastrService.error('Is there something wrong');
        this.loading = false;
      });
    }).catch((error) => {
      this.toastrService.error('Is there something wrong');
      this.loading = false;
    });
  }

}
