import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = environment.API_URI;
  }

  async getProfile(){
    const response: any = await this._httpClient.get(this.url + '/profile_find').toPromise();
    return response.message
  }

  async getEstudios(){
    const response: any = await this._httpClient.get(this.url + '/schoolar_find').toPromise();
    return response.message
  }

  async getExperiencias(){
    const response: any = await this._httpClient.get(this.url + '/experience_find').toPromise();
    return response.message
  }

  async getCompetencias(){
    const response: any = await this._httpClient.get(this.url + '/competencies_find').toPromise();
    return response.message
  }

  async getLenguajes(){
    const response: any = await this._httpClient.get(this.url + '/languajes_find').toPromise();
    return response.message
  }

  async getTechnologies(){
    const response: any = await this._httpClient.get(this.url + '/tecnologies_find').toPromise();
    return response.message
  }

  async getLenguajesProgramacion(){
    const response: any = await this._httpClient.get(this.url + '/languajesProgramming_find').toPromise();
    return response.message
  }

}
