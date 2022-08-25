import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Estudios{
  career: string,
  date_start: string,
  date_end: string,
  school: string
}

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

  async getTecnologias(){
    const response: any = await this._httpClient.get(this.url + '/tecnologies_find').toPromise();
    return response.message
  }

  async createTecnologia(form: any){
    const response: any = await this._httpClient.post(this.url + '/tecnologies_create', form).toPromise();
    return response.message
  }

  async deleteTecnologia(id: any){
    const response: any = await this._httpClient.post(this.url + '/tecnologies_delete', id).toPromise();
    return response.message
  }

  async putTecnologia(form: any){
    const response: any = await this._httpClient.put(this.url + '/tecnologies_update', form).toPromise();
    return response.message
  }

  async getLanguajes(){
    const response: any = await this._httpClient.get(this.url + '/languajes_find').toPromise();
    return response.message
  }

  async createLanguajes(form: any){
    const response: any = await this._httpClient.post(this.url + '/languajes_create', form).toPromise();
    return response.message
  }

  async deleteLanguajes(id: any){
    const response: any = await this._httpClient.post(this.url + '/languajes_delete', id).toPromise();
    return response.message
  }

  async putLanguajes(form: any){
    const response: any = await this._httpClient.put(this.url + '/languajes_update', form).toPromise();
    return response.message
  }

  async getLanguajeProgramming(){
    const response: any = await this._httpClient.get(this.url + '/languajesProgramming_find').toPromise();
    return response.message
  }

  async createLanguajesProgragraming(form: any){
    const response: any = await this._httpClient.post(this.url + '/languajesProgramming_create', form).toPromise();
    return response.message
  }

  async deleteLanguajeProgrogramming(id: any){
    const response: any = await this._httpClient.post(this.url + '/languajesProgramming_delete', id).toPromise();
    return response.message
  }

  async putLanguajeProgramming(form: any){
    const response: any = await this._httpClient.put(this.url + '/languajesProgramming_update', form).toPromise();
    return response.message
  }

  async getEstudios(): Promise<Observable<Estudios>>{
    const response: any = await this._httpClient.get(this.url + '/schoolar_find').toPromise();
    return response.message
  }

  async getOneEstudio(id: number){
    const response: any = await this._httpClient.post(this.url + '/schoolar_find_one', id).toPromise();
    return response.message
  }

  async putEstudios(form: any){
    const response: any = await this._httpClient.put(this.url + '/schoolar_update', form).toPromise();
    return response.message
  }

  async createEstudios(form: any){
    const response: any = await this._httpClient.post(this.url + '/schoolar_create', form).toPromise();
    return response.message
  }

  async deleteEstudios(id: any){
    const response: any = await this._httpClient.post(this.url + '/schoolar_delete', id).toPromise();
    return response.message
  }

  async createExperiencia(form: any){
    const response: any = await this._httpClient.post(this.url + '/experience_create', form).toPromise();
    return response.message
  }

  async deleteExperiencia(id: any){
    const response: any = await this._httpClient.post(this.url + '/experience_delete', id).toPromise();
    return response.message
  }

  async getExperiencias(){
    const response: any = await this._httpClient.get(this.url + '/experience_find').toPromise();
    return response.message
  }

  async putExperiencia(form: any){
    const response: any = await this._httpClient.put(this.url + '/experience_update', form).toPromise();
    return response.message
  }

  async getCompetencias(){
    const response: any = await this._httpClient.get(this.url + '/competencies_find').toPromise();
    return response.message
  }

  async deleteCompetencia(id: any){
    const response: any = await this._httpClient.post(this.url + '/competencies_delete', id).toPromise();
    return response.message
  }

  async createCompetencia(form: any){
    const response: any = await this._httpClient.post(this.url + '/competencies_create', form).toPromise();
    return response.message
  }

  async putCompetencia(form: any){
    const response: any = await this._httpClient.put(this.url + '/competencies_update', form).toPromise();
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
