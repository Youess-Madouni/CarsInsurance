import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { NavComponent } from './components/nav/nav.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { RegisterComponent } from './components/register/register.component';
import { TarifComponent } from './components/tarif/tarif.component'
import { AuthGuard } from './guards/auth.guard';
import { ProposComponent } from './components/propos/propos.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VoituresComponent } from './components/voitures/voitures.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    NavComponent,
    AcceuilComponent,
    RegisterComponent,
    TarifComponent,
    ProposComponent,
    ContactComponent,
    PageNotFoundComponent,
    VoituresComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
