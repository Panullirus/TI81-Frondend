import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;
  public setTechnologies: any = [];
  public setLanguajes: any = [];

  setSize(){
    if(this.currentScreenSize == 'Xsmall' || 'Small'){
      return 2;
    } else {
      return 3;
    }
    return
  }

  displayNameMap = new Map([
    [Breakpoints.XSmall, '2'],
    [Breakpoints.Small, '2'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '3'],
    [Breakpoints.XLarge, '3'],
  ]);

  constructor(breakpointObserver: BreakpointObserver, private _tables: TablesService) {
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
          }
        }
      });
  }

  arraySkillsLanguajes: any = [
    {
      framework: 'TypeScript',
      nivelDominio: 50,
      iconFramework: '../../../../assets/icons/typescript-brands.svg'
    },
    {
      framework: 'HTML',
      nivelDominio: 80,
      iconFramework: '../../../../assets/icons/html5-brands.svg'
    },
    {
      framework: 'CSS',
      nivelDominio: 30,
      iconFramework: '../../../../assets/icons/css3-alt-brands.svg'
    },
    {
      framework: 'Java',
      nivelDominio: 15,
      iconFramework: '../../../../assets/icons/java-brands.svg'
    },
    {
      framework: 'JavaScript',
      nivelDominio: 50,
      iconFramework: '../../../../assets/icons/js-brands.svg'
    }
  ]

  async getTechnologies(){
    this.setTechnologies = await this._tables.getTechnologies();
    return this.setTechnologies
  }

  async getLenguajesProgramacion(){
    this.setLanguajes = await this._tables.getLenguajesProgramacion();
    return this.setLanguajes
  }

  async ngOnInit() {
    this.setSize()
    await this.getTechnologies()

    await this.getLenguajesProgramacion()
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
