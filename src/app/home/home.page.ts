import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sms: SMS) {}

  message:string;
  number:any;

  send()
  {
    this.sms.send(this.number, this.message);
  }

}
