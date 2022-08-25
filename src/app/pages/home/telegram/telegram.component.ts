import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TelegramService } from 'src/app/services/telegram.service';

@Component({
  selector: 'app-telegram',
  templateUrl: './telegram.component.html',
  styleUrls: ['./telegram.component.css']
})
export class TelegramComponent implements OnInit {

  public sendMessageForm = new FormGroup({
    message: new FormControl
  })

  constructor(private _telegram: TelegramService) {}

  ngOnInit(): void {
  }

  async sendMessage(form: any) {
    const res = await this._telegram.sendMessage(form.value)
  }

}
