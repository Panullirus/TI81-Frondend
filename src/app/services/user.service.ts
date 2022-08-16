import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    localStorage.setItem("token", token)
    return response;
  }

  getEstudios(){
    return [
      {
        id: 1,
        years: '2021 - presente',
        school: 'UNIVERSIDAD TECNOLÓGICA DE LA RIVIERA MAYA',
        career: 'ING. GESTIÓN Y DESARROLLO DE SOFTWARE MULTIPLATAFORMA'
      },
      {
        id: 2,
        years: '2019 - 2021',
        school: 'UNIVERSIDAD TECNOLÓGICA DE LA RIVIERA MAYA',
        career: 'TSU DESARROLLO DE SOFTWARE MULTIPLATAFORMA'
      },
      {
        id: 3,
        years: '2016 - 2019',
        school: 'CETMAR #36',
        career: 'TÉCNICO EN ACUACULTURA EN AGUAS CONTINENTALES'
      },
    ]
  }

  getExperiencia(){
    return [
      {
        id: 1,
        title: 'Desarrollo web / The Reef Resorts & Spa',
        date: '09/2021 - 12/2021',
        type: 'Desarrollo de ecomerce'
      }
    ]
  }

  getCompetencias(){
    return [
      {
        id: 1,
        competencia: 'Trabajo en equipo'
      },
      {
        id: 2,
        competencia: 'Resiliencia'
      },
      {
        id: 2,
        competencia: 'Comprometido'
      }
    ]
  }

  setToken(){
    return false;
  }
}
