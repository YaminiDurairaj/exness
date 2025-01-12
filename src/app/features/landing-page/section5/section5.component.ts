import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss'],
})
export class Section5Component {
  startExploring: string = 'Start Exploring';
  redirectToExternal() {
    window.location.href =
      'https://my.octafx.com/change-partner-request/?partner=714232';
  }
}
