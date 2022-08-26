import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Messages{
  message_id: number,
  from: JSON,
  chat: JSON,
  date: Date,
  text: string
}

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

  public async getMessages(){
    const response: any = await this._httpClient.get(this.url + '/api/telegram/messages').toPromise();
    return response.message;
  }

}
