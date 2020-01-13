import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private afMessaging: AngularFireMessaging
  ) {
    this.listenFireMessaging();
  }

  requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
      (token) => { console.log('Permission granted! Token: ', token); },
      (error) => { console.error(error); }
    );
  }

  listenFireMessaging() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }
}
