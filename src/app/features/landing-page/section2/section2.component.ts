import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component {
  openAccount: string = 'Open An Account';

  redirectToExternal() {
    window.location.href =
      'https://my.octabroker.com/open-account/?refid=ib714232';
  }
}
