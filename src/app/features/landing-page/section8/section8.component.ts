import { Component } from '@angular/core';

@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.scss'],
})
export class Section8Component {
  faqs = [
    {
      question: 'What Is Forex Trading?',
      answer: `Forex, also known as foreign exchange, FX, or currency trading, is a decentralized global market where all the world's currencies trade. The forex market is the largest, most liquid market in the world with an average daily trading volume exceeding $6.5 trillion.`,
      isOpen: true, // Initially open
    },
    {
      question: 'What Is Leverage In Forex Trading?',
      answer: `Leverage in forex trading allows traders to control a larger position with a smaller amount of capital. It is expressed as a ratio, such as 50:1, meaning a trader can control $50 for every $1 in their account.`,
      isOpen: false, // Initially closed
    },
    {
      question: 'What is a lot in forex trading?',
      answer: `Currencies are traded inlots – batches of currency used to standardise forex trades. In forex trading, a standard lot is 100,000 units of currency. Alternatively, you can sometimes trade mini lots and micro lots, worth 10,000 and 1000 units respectively. `,
      isOpen: false, // Initially closed
    },
    {
      question: 'How does forex work?',
      answer: `The foreign exchange market is primarily over-the-counter (OTC.) It occurs either via electronic platforms or on the phone between banks and other participants. Only 3% of trades, mostly futures and options, is done on exchanges.
       All currency trades are done in pairs. When you sell your currency, you receive the payment in a different currency. Every traveller who has gotten foreign currency has done forex trading. `,
      isOpen: false, // Initially closed
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
