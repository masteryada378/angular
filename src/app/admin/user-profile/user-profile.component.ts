import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public currentUser: User;
  private userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public loginService: LoginService,
  ) { }

  ngOnInit() {
    this.buildFormUser();
    this.loginService.userFromDb.subscribe((response: User) => {
      if (response) {
        console.log('currentUser', response);
        this.currentUser = response;
        this.userForm.patchValue(response);
      }
    });
  }

  public buildFormUser(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      country: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      postalCode: ['', [Validators.required, Validators.minLength(6)]],
      aboutMe: [''],
      userName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public editUser(): void {
    console.log(this.userForm.value);
    this.loginService.updateUser(this.userForm.value).then(
      (response) => {
        console.log('this.editUser', response);
      }
    );
  }


}
