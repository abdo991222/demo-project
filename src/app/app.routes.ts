import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { OntfoundComponent } from './ontfound/ontfound.component';

export const routes: Routes = [

  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent ,title:'home'},
{path:'about' , component:AboutComponent ,title:'about'},
{path:'contact' , component:ContactComponent ,title:'contact'},
{path:'protfolio' , component:ProtfolioComponent ,title:'protfolio'},
{path:'**', component:OntfoundComponent}

];
