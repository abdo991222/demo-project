import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { NavparComponent } from "./navpar/navpar.component";
import { OntfoundComponent } from "./ontfound/ontfound.component";
import { ProtfolioComponent } from "./protfolio/protfolio.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, HomeComponent, ContactComponent, NavparComponent, OntfoundComponent, ProtfolioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
}
