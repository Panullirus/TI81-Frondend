import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = environment.API_URI;
  }

  public async sendMessage (message: any){
    const response: any = await this._httpClient.post(this.url + '/api/telegram', message).toPromise();
    return response.message
  }

  public async getMessages (){
    const response: any = await this._httpClient.get(this.url + '/api/telegram/messages').toPromise();
    return response.message;

  }

}
