import { Component } from '@angular/core';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.scss'],
})
export class Section7Component {
  register: string = 'Register';
  redirectToExternal() {
    window.location.href =
      'https://my.octabroker.com/open-account/?refid=ib714232';
  }
}
