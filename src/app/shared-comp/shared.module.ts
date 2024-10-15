import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule], // Import CommonModule to provide common directives
  exports: [ButtonComponent], // Export ButtonComponent to make it available elsewhere
})
export class SharedModule {}
