import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeprotalComponent } from './homeprotal/homeprotal.component';
import { MedicationComponent } from './medication/medication.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {path: 'homeportal', component: HomeprotalComponent},
  {path: 'medication', component: MedicationComponent},
  {path: 'training', component: TrainingComponent},
  {path: '', redirectTo: '/homeportal', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
