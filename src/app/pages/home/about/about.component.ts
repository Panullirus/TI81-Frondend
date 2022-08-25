import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { TablesService } from 'src/app/services/tables.service';

interface Schoolar{
  career: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy, OnInit {

  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;
  currrentScreenSizeExperiencia: string | undefined;
  public setProfile: any = []
  public setSchoolar: any = []
  public setExperiencia: any = []
  public setLenguajes: any = []
  public setCompetencias: any = []

  displayNameMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '3'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '3'],
    [Breakpoints.XLarge, '3'],
  ]);

  displayNameMapExperiencia = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '2'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '3'],
    [Breakpoints.XLarge, '3'],
  ]);

  constructor(breakpointObserver: BreakpointObserver, private _user: UserService, private _table: TablesService) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.currrentScreenSizeExperiencia = this.displayNameMapExperiencia.get(query) ?? 'unknow';
          }
        }
      });
  }

  async ngOnInit() {
    await this.getProfileData();

    await this.getEstudios();

    await this.getExperiencia();

    await this.getCompetencias();

    await this.getLenguajes();
  }

  async getProfileData(){
    this.setProfile = await this._table.getProfile();
    return this.setProfile
  }

  async getEstudios(){
    this.setSchoolar = await this._table.getEstudios()
    return this.setSchoolar;
  }

  async getExperiencia(){
    this.setExperiencia = await this._table.getExperiencias()
    return this.setExperiencia
  }

  async getCompetencias(){
    this.setCompetencias = await this._table.getCompetencias()
    return this.setCompetencias
  }

  async getLenguajes(){
    this.setLenguajes = await this._table.getLenguajes();
    return this.setLenguajes
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

