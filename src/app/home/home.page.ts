import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public token: string;

  constructor(
    private afMessaging: AngularFireMessaging
  ) {
    this.listenFireMessaging();
  }

  requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
      (token) => {
        this.token = token;
      },
      (error) => { console.error(error); }
    );
  }

  deleteToken() {
    this.afMessaging.getToken
      .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Deleted!'); },
      );
  }

  /**
   * listen to messages in the foreground.
   * The Firebase Messaging Service Worker handles background push notifications.
   */
  listenFireMessaging() {
    this.afMessaging.messages
      .subscribe((message) => { console.log('Message received: ', message); });
  }

  async copyTokenToClipboard() {
    if (navigator && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(this.token);
      } catch (err) {
        console.log('Fail to copy to clipboard: ', err);
      }
    } else {
      console.log('Missing clipboard on navigator');
    }
  }
}
