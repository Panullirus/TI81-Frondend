import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {MatDialog} from '@angular/material/dialog';
import { MenuComponent } from '../home/menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLoginData:any = {};
  public fetchUserLogin: any;

  public loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private router: Router, private _user: UserService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(MenuComponent);
  }

  goBack(){
    this.router.navigate(['']);
  }

  async logIn(form: FormGroup){
    const res: any = await this._user.signUp(form.value)
    if(res){
      this.router.navigate(['administrador'])
    }else{
      this.openDialog()
    }
  }

}
