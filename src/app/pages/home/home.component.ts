import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TelegramService } from 'src/app/services/telegram.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, OnInit {

  public sendMessageForm = new FormGroup({
    message: new FormControl
  })

  public messageContainer: any = [];

  async sendMessage(form: any) {
    const res = await this._telegram.sendMessage(form.value)
    this.getMessages();
    console.log(res)
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }
  title = 'cv';
  public chat: boolean = false;

  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;

  displayNameMap = new Map([
    [Breakpoints.XSmall, '2'],
    [Breakpoints.Small, '3'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '3'],
    [Breakpoints.XLarge, '3'],
  ]);

  goAdmin() {
    this.router.navigate(['administrador'])
  }

  click() {
    this.chat = true
  }

  cerrarChat() {
    this.chat = false
  }

  constructor(breakpointObserver: BreakpointObserver, private viewportScroller: ViewportScroller, private router: Router, private _user: UserService, private _telegram: TelegramService) {
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

  goAdministrar(){
    this.router.navigate(['administrador'])
  }

  async ngOnInit() {
     await this.getMessages()
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 1000);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  async getMessages() {
    const data = await this._telegram.getMessages();

    for(let message of data){

      let date = new Date(message.date * 1000)
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();

      let formattedTime = hours + ':' + minutes.substr(-2);

      const messageContent = {...JSON.parse(message.from), text: message.text, date: formattedTime}

      this.messageContainer.push(messageContent)
    }
  }

}

