import { Component } from '@angular/core';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss'],
})
export class Section6Component {
  openAnAccount: string = 'Open An Account';
  redirectToExternal() {
    window.location.href =
      'https://my.octabroker.com/open-account/?refid=ib714232';
  }
}
