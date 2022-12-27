import { Component, OnInit } from '@angular/core';
import {Enseignant} from "../../entities/enseignant.entities";
import {EnseignantsService} from "../../services/enseignants.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Classe} from "../../entities/classe.entities";
import {ComfactsService} from "../../services/classeserv.service";

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
  enseignantFormGroup?:FormGroup;
  submitted=false;
  enseignant?:Enseignant|null=null;
  classeFormGroup?: FormGroup;
  classe ?: Classe;

  constructor(private enseignantsService:EnseignantsService,private fb:FormBuilder,private classeService: ComfactsService) { }

  ngOnInit(): void {
    this.enseignantFormGroup = this.fb.group({
      nom: ["",Validators.required],
      prenom : ["",Validators.required],
      tel : ["+(32)(0)",Validators.required],
      matricule:["",Validators.required],
      chargesem:["",Validators.required],
      salairemensu:["",Validators.required],
      dateengag:["",Validators.required]
    })
  }






  saveEnseignant() {//permet d'ajouter un enseignant à la bd
    this.submitted=true;
    if(this.enseignantFormGroup?.invalid)alert("Encodage invalide")
    else{
      alert(this.enseignantFormGroup?.value.nom+" "+
        this.enseignantFormGroup?.value.prenom+" "+
        this.enseignantFormGroup?.value.tel)
    }
  }

  rechParID(value: any) {
    let numero:number = value.numero;
    this.enseignantsService.getEnseignant(numero).subscribe({
      next: enseignant => {this.enseignant = enseignant ; this.enseignantFormGroup = this.fb.group({
        id_ENSEIGNANT:[enseignant.id_ENSEIGNANT,Validators.required],
        nom: [enseignant.nom,Validators.required],
        prenom : [enseignant.prenom,Validators.required],
        matricule : [enseignant.matricule,Validators.required],
        chargesem : [enseignant.chargesem,Validators.required],
        salairemensu : [enseignant.salairemensu,Validators.required],
        dateengag: [enseignant.dateengag,Validators.required],
        tel : [enseignant.tel,Validators.required]
      })},
      error: error => {
        alert("Erreur : " + error.headers.get("error"));
        this.enseignant = null;
      }
    })
  }

  majEnseignant(){
    this.submitted = true;
    if (this.enseignantFormGroup?.invalid) { return; }

    this.enseignantsService.updateEnseignant(this.enseignantFormGroup?.value).subscribe(
      data => {alert('maj ok')},
      err => {alert(err.headers.get("error"));
      });
  }

  rechercheComParID(value: any) {

    this.classeService.search(value.idcom).subscribe({
        next: data => {
          this.classeFormGroup = this.fb.group(
            {
              sigle: [data.sigle,Validators.required],
              annee: [data.annee, Validators.required],
              specialite:[data.specialite,Validators.required],
              nbreeleves: [data.nbreeleves,Validators.required]
            }
          )
        },
        error: error => alert("Classe introuvable")
      }
    )
  }



}
