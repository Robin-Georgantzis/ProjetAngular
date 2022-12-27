import { Component, OnInit } from '@angular/core';
import {EnseignantsService} from "../../services/enseignants.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComfactsService} from "../../services/classeserv.service";
import {Classe} from "../../entities/classe.entities";

@Component({
  selector: 'app-editenseignant',
  templateUrl: './editenseignant.component.html',
  styleUrls: ['./editenseignant.component.css']
})
export class EditenseignantComponent implements OnInit {

  enseignantFormGroup?:FormGroup;
  submitted=false;
  id_ENSEIGNANT:number;
  classefact?:Classe[];



  constructor(private enseignantService:EnseignantsService,private fb:FormBuilder,activatedRoute : ActivatedRoute,private classeService:ComfactsService) {
      this.id_ENSEIGNANT=activatedRoute.snapshot.params.idEnseignant;
  }

  ngOnInit(): void {
    this.enseignantService.getEnseignant(this.id_ENSEIGNANT).subscribe(
    enseignant=>{this.enseignantFormGroup= this.fb.group({
      id_ENSEIGNANT:[enseignant.id_ENSEIGNANT,Validators.required],
      nom: [enseignant.nom,Validators.required],
      prenom : [enseignant.prenom,Validators.required],
      matricule : [enseignant.matricule,Validators.required],
      chargesem : [enseignant.chargesem,Validators.required],
      salairemensu : [enseignant.salairemensu,Validators.required],
      dateengag: [enseignant.dateengag,Validators.required],
      tel : [enseignant.tel,Validators.required]
    })}
    )
  }

  onUpdateEnseignant(): void {
    this.submitted = true;
    if (this.enseignantFormGroup?.invalid) { return; }

    this.enseignantService.updateEnseignant(this.enseignantFormGroup?.value).subscribe(
      data => {alert('maj ok')},
      err => {alert(err.headers.get("error"));
      });
  }

  onShowClasseEnseignant() {
    this.classeService.getClasseEnseignant(this.id_ENSEIGNANT).subscribe({
      next:data => this.classefact=data,
      error:err => alert("Erreur de recherche")
    })
  }

  addClasse($event: Classe) {
    this.classefact?.push($event);
  }
}
