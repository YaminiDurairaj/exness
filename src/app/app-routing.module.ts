import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Home route displaying the landing page
  { path: '**', redirectTo: '' }, // Redirect unknown routes to the home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
