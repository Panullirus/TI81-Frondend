import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TablesService } from 'src/app/services/tables.service';
import { UserService } from 'src/app/services/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export interface SchoolElements {
  years: string,
  school: string,
  career: string
}

export interface LanguajeElements {
  languaje: string,
  languaje_domain: string
}

export interface ExperienceElement {
  title: string,
  date: string,
  type: string
}

export interface LanguajesProgrammingElement {
  languaje: string,
  languaje_domain: number,
  languaje_svg: string
}

export interface CompetenciasElement {
  competencia: string
}

export interface School {
  value: {
    id: number,
    career: string,
    school: string,
    date_start: string,
    date_end: string
  }
}

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit, OnDestroy {

  public model: NgbDateStruct | undefined;

  public updateLanguajeForm = new FormGroup({
    languaje: new FormControl(),
    languaje_domain: new FormControl()
  })

  public updateExperienceForm = new FormGroup({
    job: new FormControl(),
    work_station: new FormControl(),
    date_start: new FormControl(),
    date_end: new FormControl(),
  });

  public updateEstudiosForm = new FormGroup({
    career: new FormControl,
    date_start: new FormControl,
    date_end: new FormControl,
    school: new FormControl,
  });

  public updateCompetenciaForm = new FormGroup({
    competencie: new FormControl,
  })

  public updateLanguajeProgrammingForm = new FormGroup({
    languaje: new FormControl,
    languaje_domain: new FormControl,
    languaje_svg: new FormControl
  })

  public updateTecnologiaForm = new FormGroup({
    tecnologie_name: new FormControl,
    tecnologie_domain: new FormControl,
    tecnologie_svg: new FormControl
  })

  public createLanguajeForm = new FormGroup({
    languaje: new FormControl,
    languaje_domain: new FormControl
  })

  public createEstudiosForm = new FormGroup({
    career: new FormControl,
    date_start: new FormControl,
    date_end: new FormControl,
    school: new FormControl,
  });

  public createExperienciaForm = new FormGroup({
    job: new FormControl(),
    work_station: new FormControl(),
    date_start: new FormControl(),
    date_end: new FormControl(),
  });

  public createCompetenciaForm = new FormGroup({
    competencie: new FormControl(),
  })

  public createLanguajeProgrammingForm = new FormGroup({
    languaje: new FormControl(),
    languaje_domain: new FormControl(),
    languaje_svg: new FormControl
  })

  public createTecnologiaForm = new FormGroup({
    tecnologie_name: new FormControl,
    tecnologie_domain: new FormControl,
    tecnologie_svg: new FormControl
  })

  closeResult = '';

  public setExperiencias: any = [];
  public setCompetencias: any = [];
  public setEstudios: any = [];
  public setLanguajeProgramming: any = [];
  public setLanguaje: any = [];
  public setTecnologia: any = [];

  public experienceData: any = [];
  public schoolData: any = [];
  public competencieData: any = [];
  public languajeProgrammingData: any = [];
  public languajeData: any = [];
  public tecnologiaData: any = [];

  public spinner = true;

  constructor(private _user: UserService, private router: Router, private _table: TablesService, private _modal: NgbModal) { }

  async createTecnologia(form: any){

    const res: any = await this._table.createTecnologia(form.value);

    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async updateTecnologia(form: any, content: any){
    this.tecnologiaData = form;
    this.updateTecnologiaForm.setValue({
      tecnologie_name: this.tecnologiaData.tecnologie_name,
      tecnologie_domain: this.tecnologiaData.tecnologie_domain,
      tecnologie_svg: this.tecnologiaData.tecnologie_svg
    })
    this.open(content, 'update-tecnologia');
  }

  async deleteTecnologia(id: number){
    const res = await this._table.deleteTecnologia({id: id});
    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async createLanguajes(form: any){
    const res: any = await this._table.createLanguajes(form.value);
    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async updateLanguaje(form: any, content: any){
    this.languajeData = form;
    this.updateLanguajeForm.setValue({
      languaje: this.languajeData.languaje,
      languaje_domain: this.languajeData.languaje_domain
    })

    this.open(content, 'update-languaje');
  }

  async deleteLanguaje(id: number){
    const res = await this._table.deleteLanguajes({id: id});
    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async createLanguajesProgramming(form: any){

    const res: any = await this._table.createLanguajesProgragraming(form.value);

    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async updateLanguajeProgramming(form: any, content: any){
    this.languajeProgrammingData = form;
    this.updateLanguajeProgrammingForm.setValue({
      languaje: this.languajeProgrammingData.languaje,
      languaje_domain: this.languajeProgrammingData.languaje_domain,
      languaje_svg: this.languajeProgrammingData.languaje_svg
    })
    this.open(content, 'update-languajeProgramming');
  }

  async deleteLanguajeProgramming(id: number){
    const res = await this._table.deleteLanguajeProgrogramming({id: id});
    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async createExperiencia(form: any){
    const checkDateStart = this.validateDate(form.value.date_start)
    const checkDateEnd = this.validateDate(form.value.date_end)

    if(checkDateStart && checkDateEnd){
      try {
        const res: any = await this._table.createExperiencia(form.value);
        if(res){
          location.reload();
        }else{
          console.log('error')
        }
      } catch (error) {
        console.log("Error al crear experiencia => ", error);
      }
    }
  }

  async createCompetencia(form: any){
    try {
       const res: any = await this._table.createCompetencia(form.value);
      if(res){
        location.reload();
      }else{
        console.log('error')
      }
    } catch (error) {
      console.log("Error al crear competencia => ", error);
    }
  }

  async deleteExperiencia(id: any){
    const res = await this._table.deleteExperiencia({id: id});
    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async onSubmmitUpdateLanguajeProgramming(form: any){

    const data = {...this.languajeProgrammingData, ...form.value};

    const res = await this._table.putLanguajeProgramming(data);

    if(res){
      location.reload();
    }else{
      console.log('error')
    }

  }

  async onSubmmitUpdateLanguaje(form: any){

    const data = {...this.languajeData, ...form.value};

      const res = await this._table.putLanguajes(data);

      if(res){
        location.reload();
      }else{
        console.log('error')
      }

  }

  async onSubmmitUpdateTecnologia(form: any){

      const data = {...this.tecnologiaData, ...form.value};

      const res = await this._table.putTecnologia(data);

      if(res){
        location.reload();
      }else{
        console.log('error')
      }

  }

  async updateExperiencia(form: any, content: any){
    this.experienceData = form;
    this.updateExperienceForm.setValue({
      job: this.experienceData.job,
      work_station: this.experienceData.work_station,
      date_start: this.experienceData.date_start,
      date_end: this.experienceData.date_end,
    })
    this.open(content, 'update-competencias');
  }

  async onSubmmitUpdateExperiencia(form: any){
    const data = {...this.experienceData, ...form.value};

    const res = await this._table.putExperiencia(data);

    if(res){
      location.reload();
    }else{
      console.log("Error al actualizar experiencia")
    }
  }

  async updateSchool(form: any, content: any){
    this.schoolData = form;
    this.updateEstudiosForm.setValue({
      career: this.schoolData.career,
      date_start: this.schoolData.date_start,
      date_end: this.schoolData.date_end,
      school: this.schoolData.school,
    })
    this.open(content, 'update-school');
  }

  async onSubmmitUpdateSchool(form: any){

    const data = {...this.schoolData, ...form.value};

    const res = await this._table.putEstudios(data);

    if(res){
      location.reload();
    }else{
      console.log('error al actualizar experiencia => ', res);
    }
  }

  async onSubmmitUpdateCompetencias(form: any){

    const data = {...this.competencieData, ...form.value};

    const res = await this._table.putCompetencia(data);

    console.log(res)

    if(res){
      location.reload();
    }else{
      console.log("Error al actualizar competencia")
    }

  }

  async createSchool(form: School){
    const checkDateStart = this.validateDate(form.value.date_start)
    const checkDateEnd = this.validateDate(form.value.date_end)

    if(checkDateStart && checkDateEnd){
      try {
        console.log(form.value)
        const res: School = await this._table.createEstudios(form.value);
        if(res){
          location.reload();
        }else{
          console.log('error')
        }
      } catch (error) {
        console.log("Error al crear estudio => ", error);
      }
    }else{
      alert('Formato de fecha incorrecto');
    }
  }

  async deleteEstudio(id: any){
    const res = await this._table.deleteEstudios({id: id});
    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  async deleteCompetencia(id: any){
    const res = await this._table.deleteCompetencia({id: id});
    if(res){
      location.reload();
    }else{
      console.log('error')
    }
  }

  validateDate(date: string){
    const regExp = /^\d{4}-\d{2}-\d{2}$/;
    return regExp.test(date);
  }

  async updateCompetencie(form: any, content: any){
    this.competencieData = form;
    this.updateCompetenciaForm.setValue({
      competencie: this.competencieData.competencie
    })
    this.open(content, 'update-competencias');
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  async ngOnInit() {
    await this.getExperiencia();
    await this.getCompetencias();
    await this.getEstudios();
    await this.getLanguajeProgramming();
    await this.getLanguaje();
    await this.getTecnologia();
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
    this.setEstudios = await this._table.getEstudios()
    return this.setEstudios;
  }

  async getLanguajeProgramming(){
    this.setLanguajeProgramming = await this._table.getLanguajeProgramming();
    return this.setLanguajeProgramming;
  }

  async getLanguaje(){
    this.setLanguaje = await this._table.getLanguajes();
    return this.setLanguaje;
  }

  async getTecnologia(){
    this.setTecnologia = await this._table.getTecnologias();
    return this.setTecnologia;
  }

  displayedColumnsEstudios: string[] = ['career', 'date_start', 'date_end', 'school', 'operations'];
  dataSourceEstudios = this.setEstudios;

  displayColumnsExperiences: string[] = ['title', 'date_start', 'date_end','type', 'operations'];
  dataSourceExperiences = this.setExperiencias

  displayColumsLanguajesPrograming: string[] = ['languaje', 'languaje_domain', 'languaje_svg', 'operations'];
  dataSourceLanguajesPrograming = this.setLanguajeProgramming;

  displayedColumnsCompetencias: string[] = ['competencia', 'operations'];
  dataSourceCompetencias = this.setCompetencias;

  displayColumsLanguaje: string[] = ['languaje', 'languaje_domain', 'operations'];
  dataSourceLanguaje = this.setLanguajeProgramming;

  displayColumsTecnologia: string[] = ['tecnologie_name', 'tecnologie_domain', 'tecnologie_svg', 'operations'];
  dataSourceTecnologia = this.setTecnologia;

  goBack(){
    this.router.navigate([''])
  }

  open(content: any, Label: "update-experiencie" | "update-school" | "update-tecnologia" | "update-competencias" | "update-languajeProgramming" | "update-languaje" |"create-experiencie" | "create-tecnologia" | "create-competencia" | "create-languaje" | "create-estudios" | "create-languajeProgramming"){
    this._modal.open(content, {ariaLabelledBy: Label}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnDestroy(): void {
    this.getEstudios
  }
}
