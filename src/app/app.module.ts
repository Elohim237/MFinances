import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderAccueilComponent } from './header-accueil/header-accueil.component';
import { ProfilTypeComponent } from './profil-type/profil-type.component';
import { ServicesComponent } from './services/services.component';
import { WhyChoiseComponent } from './why-choise/why-choise.component';
import { CeoSectionComponent } from './ceo-section/ceo-section.component';
import { PodcastAccueilComponent } from './podcast-accueil/podcast-accueil.component';
import { ZoneContactComponent } from './zone-contact/zone-contact.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { HeaderAboutComponent } from './header-about/header-about.component';
import { AbslComponent } from './absl/absl.component';
import { ProfilIndependantComponent } from './profil-independant/profil-independant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderAccueilComponent,
    ProfilTypeComponent,
    ServicesComponent,
    WhyChoiseComponent,
    CeoSectionComponent,
    PodcastAccueilComponent,
    ZoneContactComponent,
    TopBarComponent,
    AccueilComponent,
    AboutComponent,
    HeaderAboutComponent,
    AbslComponent,
    ProfilIndependantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
