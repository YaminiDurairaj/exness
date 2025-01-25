import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquiryform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './enquiryform.component.html',
  styleUrl: './enquiryform.component.scss',
})
export class EnquiryformComponent {
  @Output() close = new EventEmitter<void>(); // Emits an event to close the form
  @Output() submit = new EventEmitter<any>(); // Emits the form data upon submission
  formData = {
    name: '',
    email: '',
    phone: '',
    tradedBefore: '',
    broker: '',
  };
  // Handle form submission
  submitEnquiry() {
    console.log('Form Submitted:', this.formData);

    // Redirect to WhatsApp with the details
    const whatsappMessage = `Name: ${this.formData.name}%0AEmail: ${
      this.formData.email
    }%0APhone: ${this.formData.phone}%0ATraded Before: ${
      this.formData.tradedBefore
    }%0AWhich Broker: ${this.formData.broker || 'N/A'}`;
    const whatsappUrl = `https://wa.me/8686823333?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  closeDialog() {
    this.close.emit(); // Emit close event to parent
  }
  // Triggered when "Traded Before" value changes
  checkTradedBefore() {
    if (this.formData.tradedBefore === 'no') {
      this.formData.broker = ''; // Clear the broker field
    }
  }
}
