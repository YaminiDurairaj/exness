import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  buttonLabel1: string = 'Start Trading';
  buttonLabel2: string = 'Upgrade To Tamil FX Signals';
  buttonLabel3: string = 'Subscribe to Notifications';
  readonly VAPID_PUBLIC_KEY =
    'BPwFjXsSv9fTFRCLvRSGgbDsEl8iYm8AxbHLdotkeKjCRe5bIIC11buaWXWTATAITXubedMhV243PgDc4yWvDh4';

  constructor(private swPush: SwPush, private http: HttpClient) {
    this.swPush.messages.subscribe((message) => {
      console.log('Received push message:', message);
    });

    this.swPush.notificationClicks.subscribe((event) => {
      console.log('Notification clicked:', event);
    });
  }
  redirectToExternal() {
    window.location.href =
      'https://my.octafx.com/change-partner-request/?partner=714232';
  }
}
