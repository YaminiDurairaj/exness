import { Component } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component {
  openAccount: string = 'Open An Account';
  redirectToExternal() {
    window.location.href =
      'https://my.octabroker.com/open-account/?refid=ib714232';
  }

  headers = [
    { label: 'Instrument' },
    { label: 'Leverage' },
    { label: 'Avg. spread, pips' },
    { label: 'Swap-free' },
    // { label: 'Category' },
  ];

  instruments = [
    {
      name: 'XAUUSD',
      subtext: 'Gold',
      leverage: 'Customizable',
      spread: '20',
      swapFree: 'Available',
      category: 'Metals',
      image: 'assets/images/instrument_1.png', // Replace with actual image URL
    },
    {
      name: 'EURUSD',
      subtext: 'Euro vs US Dollar',
      leverage: 'Customizable',
      spread: '1',
      swapFree: 'Available',
      category: 'Currencies',
      image: 'assets/images/instrument_2.png', // Replace with actual image URL
    },
    {
      name: 'US500',
      subtext: 'US SPX 500 Index',
      leverage: '1:400',
      spread: '16.5',
      swapFree: 'Available',
      category: 'Indices',
      image: 'assets/images/instrument_3.png', // Replace with actual image URL
    },
    {
      name: 'APPL',
      subtext: 'Apple Inc.',
      leverage: '1:20',
      spread: '0.9',
      swapFree: 'Available',
      category: 'Stocks',
      image: 'assets/images/instrument_4.png', // Replace with actual image URL
    },
  ];
}
