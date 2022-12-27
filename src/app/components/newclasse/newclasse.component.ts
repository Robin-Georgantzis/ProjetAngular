import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Classe} from "../../entities/classe.entities";
import {ComfactsService} from "../../services/classeserv.service";

@Component({
  selector: 'app-newclasse',
  templateUrl: './newclasse.component.html',
  styleUrls: ['./newclasse.component.css']
})
export class NewclasseComponent implements OnInit {

  @Input() clfact?:FormGroup;
  @Output() newClasse= new EventEmitter<Classe>();
  classeFormGroup?: FormGroup;
  submitted = false;
  cl?:Classe;
  constructor(private fb: FormBuilder, private comfactService:
    ComfactsService) { }
  ngOnInit(): void {
    this.classeFormGroup = this.fb.group({
      sigle: ['A1'],
      annee: ['0'],
      specialite:['Anglais'],
      nbreeleves: ['0']
    });
  }

  onSaveClasse(): void {
    this.submitted = true;

    this.comfactService.save(this.classeFormGroup?.value,this.clfact?.value).subscribe({
      next : data => {alert('sauvegardeok');this.cl=data;this.newClasse.emit(data) },
      error :err => {alert(err.headers.get("error"));}});
  }
}
