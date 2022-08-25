import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = environment.API_URI;
  }

  checkOut(){
    return false;
  }

  async signUp(data: any){
    const response: any =  await this._httpClient.post(this.url + '/login', data).toPromise();
    const token = response.token;

    if(response.ok){
      const expiresAt = moment().add(token.expiresIn, 'second');

      localStorage.setItem("token", token)
      localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()))

      return true;
    }else{
      return false;
    }
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration: any = localStorage.getItem("expiresAt");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
}

  setToken(){
    return false;
  }
}
