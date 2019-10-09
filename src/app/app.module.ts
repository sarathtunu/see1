import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeprotalComponent } from './homeprotal/homeprotal.component';
import { TrainingComponent } from './training/training.component';
import { MedicationComponent } from './medication/medication.component';
import { IndexComponent } from './index/index.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { logInService } from './Login/logInService';
@NgModule({
  entryComponents: [ SignInComponent ],
  declarations: [
    AppComponent,
    HomeprotalComponent,
    TrainingComponent,
    MedicationComponent,
    IndexComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [logInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
