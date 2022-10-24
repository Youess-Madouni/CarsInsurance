import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProposComponent } from './components/propos/propos.component';
import { ContactComponent } from './components/contact/contact.component';
import { TarifComponent } from './components/tarif/tarif.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'acceuil' , pathMatch:'full'},
  {path:'acceuil' , component:AcceuilComponent},
  {path:'form' , component:TestComponent , canActivate:[AuthGuard]},
  {path:'login' , component:LoginComponent },
  {path:'registre' , component:RegisterComponent },
  {path:'tarif', component:TarifComponent , canActivate:[AuthGuard]},
  {path:'contact' , component:ContactComponent},
  {path:'propos' , component:ProposComponent},
   {path:'**' ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
