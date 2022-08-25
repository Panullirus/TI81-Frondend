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
    //validar si es un jwt
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
