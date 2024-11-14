import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/shared-comp/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  buttonLabel1: string = 'Start Trading';
  buttonLabel2: string = 'Upgrade To Tamil Forex Signals';
}
