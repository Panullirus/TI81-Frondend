import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'
import { HomeComponent } from './home.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenuComponent } from './menu/menu.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EditComponent } from './edit/edit.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TelegramComponent } from './telegram/telegram.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    MenuComponent,
    AdministradorComponent,
    FooterComponent,
    EditComponent,
    TelegramComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatGridListModule,
    LayoutModule,
    MatBottomSheetModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    FooterComponent,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HomeModule { }
