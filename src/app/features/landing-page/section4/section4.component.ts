import { Component } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss'],
})
export class Section4Component {
  startExploring: string = 'Start Exploring';
  redirectToExternal() {
    window.location.href =
      'https://my.octafx.com/change-partner-request/?partner=714232';
  }
}
