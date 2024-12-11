import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { AbslComponent } from './absl/absl.component';
import { ProfilIndependantComponent } from './profil-independant/profil-independant.component';
import { ProfilSocieteManagementPatrimonialeComponent } from './profil-societe-management-patrimoniale/profil-societe-management-patrimoniale.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'absl', component: AbslComponent },
  { path: 'profil-independant', component: ProfilIndependantComponent },
  { path: 'societe-management-patrimoniale', component: ProfilSocieteManagementPatrimonialeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
