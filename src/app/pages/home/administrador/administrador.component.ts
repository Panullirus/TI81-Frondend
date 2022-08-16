import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TablesService } from 'src/app/services/tables.service';
import { UserService } from 'src/app/services/user.service';

export interface SchoolElements {
  years: string,
  school: string,
  career: string
}

export interface ExperienceElement {
  title: string,
  date: string,
  type: string
}

export interface CompetenciasElement {
  competencia: string
}

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit {

  public setExperiencias: any = [];
  public setCompetencias: any = [];
  public setEstudios: any = [];

  constructor(private _user: UserService, private router: Router, private _table: TablesService) { }

  async ngOnInit() {
    await this.getExperiencia();
    await this.getCompetencias();
    await this.getEstudios();
  }

  async getExperiencia(){
    //await this._table.getExperiencias();
    this.setExperiencias = await this._table.getExperiencias();
    return this.setExperiencias;
  }

  async getCompetencias(){
    this.setCompetencias = await this._table.getCompetencias();
    return this.setCompetencias;
  }

  async getEstudios(){
    this.setEstudios = await this._table.getEstudios();
    console.log(this.setEstudios);
    return this.setEstudios;
  }

  editSchool(id: number){
    this.router.navigate([`edit/${id}`]);
  }

  estudios: SchoolElements[] = this._user.getEstudios();

  displayedColumnsEstudios: string[] = ['career', 'date_start', 'date_end', 'school', 'operations'];
  dataSourceEstudios = this.estudios;

  editExperience(id: number){
    this.router.navigate([`edit/${id}`]);
  }

  experiencias: ExperienceElement[] = this._user.getExperiencia();

  displayColumnsExperiences: string[] = ['title', 'date_start', 'date_end','type', 'operations'];
  dataSourceExperiences = this.setExperiencias

  editCompetencias(id: number){
    this.router.navigate([`edit/${id}`])
  }

  competencias: CompetenciasElement[] = this._user.getCompetencias();

  displayedColumnsCompetencias: string[] = ['competencia', 'operations'];
  dataSourceCompetencias = this.competencias;

  goBack(){
    this.router.navigate([''])
  }
}
