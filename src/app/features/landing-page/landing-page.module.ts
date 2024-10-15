import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from 'src/app/shared-comp/shared.module';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component'; // Import SharedModule

@NgModule({
  declarations: [HomeComponent, LandingPageComponent, Section2Component, Section3Component, Section4Component, Section5Component, Section6Component, Section7Component],
  imports: [
    CommonModule,
    SharedModule, // Import SharedModule to use ButtonComponent
  ],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
