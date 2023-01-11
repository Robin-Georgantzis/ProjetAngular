import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { EnseignantsComponent } from './components/enseignants/enseignants.component';
import { ClassesComponent } from './components/classes/classes.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ExercicesComponent } from './components/exercices/exercices.component';
import { NewenseignantComponent } from './components/newenseignant/newenseignant.component';
import { EditenseignantComponent } from './components/editenseignant/editenseignant.component';
import { EditclasseComponent } from './components/editclasse/editclasse.component';
import { NewclasseComponent } from './components/newclasse/newclasse.component';
import { ExamenComponent } from './components/examen/examen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    EnseignantsComponent,
    ClassesComponent,
    ExercicesComponent,
    NewenseignantComponent,
    EditenseignantComponent,
    EditclasseComponent,
    NewclasseComponent,
    ExamenComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
