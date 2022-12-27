import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComfactsService} from "../../services/classeserv.service";
import {Classe} from "../../entities/classe.entities";

@Component({
  selector: 'app-editclasse',
  templateUrl: './editclasse.component.html',
  styleUrls: ['./editclasse.component.css']
})
export class EditclasseComponent implements OnInit {

  classeFormGroup?: FormGroup;
  submitted=false;
  @Input() classefact?:Classe;
  deleted=false;

  constructor(private classeService: ComfactsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.classeFormGroup = this.fb.group({
      id_CLASSE: [this.classefact?.id_CLASSE],
      sigle: [this.classefact?.sigle,Validators.required],
      annee: [this.classefact?.annee, Validators.required],
      specialite:[this.classefact?.specialite,Validators.required],
      nbreeleves: [this.classefact?.nbreeleves,Validators.required]});
  }

  onUpdateComfact(): void {
    this.submitted = true;
    if (this.classeFormGroup?.invalid) {
      return;
    }
    let classefactmaj:Classe=this.classeFormGroup?.value;
    if(this.classefact) {//permet de s'assurer que la commande a bien une valeuret évite les avertissements "possiblement indéfini"
      classefactmaj.enseignant = this.classefact.enseignant; //car le formulaire ne donne une valeur qu' aux champs propres de la commande
      this.classeService.updateComfact(this.classeFormGroup?.value).subscribe(data => {
          alert('maj ok')
        },
        err => {
          alert(err.headers.get("error"));
        });
    }
  }
  onDeleteComfact() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {

      this.classeService.deleteClasse(this.classeFormGroup?.value).subscribe(data => {
          alert('effacement ok');
          this.deleted=true; },
        err => {alert(err.headers.get("error"));
        });
    }
  }

}
