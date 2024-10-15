import { Component } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component {
  openAccount: string = 'Open An Account';

  headers = [
    { label: 'Instrument' },
    { label: 'Leverage' },
    { label: 'Avg. spread, pips' },
    { label: 'Swap-free' },
    { label: 'Category' },
  ];

  instruments = [
    {
      name: 'XAUUSD',
      subtext: 'Gold',
      leverage: 'Customizable',
      spread: '20',
      swapFree: 'Available',
      category: 'Metals',
    },
    {
      name: 'EURUSD',
      subtext: 'Euro vs US Dollar',
      leverage: 'Customizable',
      spread: '1',
      swapFree: 'Available',
      category: 'Currencies',
    },
    {
      name: 'US500',
      subtext: 'US SPX 500 Index',
      leverage: '1:400',
      spread: '16.5',
      swapFree: 'Available',
      category: 'Indices',
    },
    {
      name: 'APPL',
      subtext: 'Apple Inc.',
      leverage: '1:20',
      spread: '0.9',
      swapFree: 'Available',
      category: 'Stocks',
    },
  ];
}
