import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnseignantsComponent} from "./components/enseignants/enseignants.component";
import {ClassesComponent} from "./components/classes/classes.component";
import {HomeComponent} from "./components/home/home.component";
import {ExercicesComponent} from "./components/exercices/exercices.component";
import {NewenseignantComponent} from "./components/newenseignant/newenseignant.component";
import {EditenseignantComponent} from "./components/editenseignant/editenseignant.component";

const routes: Routes = [
  {path: 'enseignants', component: EnseignantsComponent},
  {path: 'classes', component: ClassesComponent},
  {path: '', component: HomeComponent},
  {path : "exercices", component : ExercicesComponent},
  {path : "newEnseignant", component : NewenseignantComponent},
  {path : "editEnseignant/:idEnseignant",component:EditenseignantComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
