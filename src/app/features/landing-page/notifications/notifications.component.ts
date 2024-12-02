import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  notifications: any[] = []; // Array to store notifications

  readonly VAPID_PUBLIC_KEY =
    'BPwFjXsSv9fTFRCLvRSGgbDsEl8iYm8AxbHLdotkeKjCRe5bIIC11buaWXWTATAITXubedMhV243PgDc4yWvDh4';

  constructor(
    private swPush: SwPush,
    private http: HttpClient,
    public backendapiService: BackendApiService
  ) {
    this.swPush.messages.subscribe((message: any) => {
      console.log('Received push message:', message);
      // Add the notification message to the notifications array
      const notificationBody = message?.notification?.body;
      if (notificationBody) {
        this.notifications.push({
          title: 'New Notification',
          body: notificationBody,
        });
      }
    });

    this.swPush.notificationClicks.subscribe((event) => {
      console.log('Notification clicked:', event);
    });

    // For testing purpose, trigger a notification when component loads
    // this.sendNotification();
  }

  // Trigger notification method
  sendNotification(): void {
    const notificationPayload = {
      title: 'Hello',
      body: 'This is a custom test notification!',
    };

    this.backendapiService.triggerNotification(notificationPayload).subscribe({
      next: () => {
        console.log('Notification triggered successfully');
        this.notifications.push(notificationPayload);
      },
      error: (err) => {
        console.error('Error triggering notification:', err);
      },
    });
  }

  // Function to dismiss notifications
  dismissNotification(notification: any) {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1); // Remove the notification from the list
    }
  }
}
