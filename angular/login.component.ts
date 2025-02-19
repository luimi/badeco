import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Parse from 'parse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    if (Parse.User.current()) this.goToMain()
  }

  async login() {
    if (!this.loginForm.valid) {
      alert("Debe ingresar usuario y/o contraseña")
      return
    }
    this.isLoading = true;
    let user = this.loginForm.value;
    try {
      let _user = await Parse.User.logIn(user.username, user.password)
      if (!this.isActive(_user)) {
        this.logout()
        alert("Usuario no activo en la plataforma")
      } else if (!await this.hasRoles(_user)) {
        this.logout()
        alert("Usuario no posee un rol activo en la plataforma")
      } else {
        this.goToMain()
      }
    } catch (e: any) {
      alert("Usuario y/o contraseña invalido")
    }
    this.isLoading = false;
  }
  isActive(user: any) {
    return user.get('isActive')
  }
  async hasRoles(user: any) {
    let roles = await new Parse.Query(Parse.Role).equalTo('users', user).find()
    return roles.length > 0
  }
  async logout() {
    await Parse.User.logOut()
  }
  goToMain() {
    this.router.navigate(["/main"])
  }
}
