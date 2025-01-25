import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tamil FX Signals';
  enquiryForm: boolean = false;
  openEnquiryForm() {
    this.enquiryForm = true;
  }
  closeEnquiryForm() {
    this.enquiryForm = false; // Hide the enquiry form
  }
  handleEnquirySubmission(formData: any) {
    // Logic to handle form submission
    const whatsappUrl = `https://wa.me/0123456789?text=Hello!%20I%20am%20${encodeURIComponent(
      formData.name
    )},%20my%20email%20is%20${encodeURIComponent(
      formData.email
    )},%20and%20here%20is%20my%20message:%20${encodeURIComponent(
      formData.message
    )}`;
    window.open(whatsappUrl, '_blank');
    this.closeEnquiryForm(); // Close the form after submission
  }
}
