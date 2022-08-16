import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLogged(): boolean{
    const token = this.getToken();
    return token !== null
  }

  getToken(){
    const token = localStorage.getItem('token');
    if(token != undefined){
      return token;
    }else{
      return null;
    }
  }

  logOut(){
    localStorage.clear()
  }
}
