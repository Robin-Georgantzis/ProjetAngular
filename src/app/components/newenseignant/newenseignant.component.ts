import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EnseignantsService} from "../../services/enseignants.service";

@Component({
  selector: 'app-newenseignant',
  templateUrl: './newenseignant.component.html',
  styleUrls: ['./newenseignant.component.css']
})
export class NewenseignantComponent implements OnInit {


  enseignantFormGroup?:FormGroup;
  submitted=false;


  constructor(private enseignantService:EnseignantsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.enseignantFormGroup= this.fb.group({
      nom: ["",Validators.required],
      prenom : ["",Validators.required],
      matricule : ["",Validators.required],
      chargesem : ["",Validators.required],
      salairemensu : ["",Validators.required],
      dateengag: ["",Validators.required],
      tel : ["+(32)(0)",Validators.required]
    })

  }

  onSaveEnseignant(): void {
    this.submitted = true;
    if (this.enseignantFormGroup?.invalid) {
      return;
    }
    this.enseignantService.save(this.enseignantFormGroup?.value).subscribe(
      data => {
        alert("sauvegarde ok");
        alert("Numéro du client = " + data.id_ENSEIGNANT)
      },
      err => {
        alert(err.headers.get("error"));
      });
  }
}
