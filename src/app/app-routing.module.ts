import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: "", redirectTo: "Home", pathMatch: "full"},
  {path: "Home", component: HomeComponent},
  {path: "Portfolio", component: PortfolioComponent},
  {path: "About", component: AboutComponent},
  {path: "Contact", component: ContactMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
