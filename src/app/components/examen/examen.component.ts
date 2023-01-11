import { Component, OnInit } from '@angular/core';
import {Classe} from "../../entities/classe.entities";
import {ComfactsService} from "../../services/classeserv.service";
import {EnseignantsService} from "../../services/enseignants.service";
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {Enseignant} from "../../entities/enseignant.entities";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  classe:Classe|null=null;
  specialite:string="";
  classetrouv?:Classe[];
  id_ENSEIGNANT: number=0;




  constructor(private enseignantService:EnseignantsService,private fb:FormBuilder,activatedRoute : ActivatedRoute,private classeService:ComfactsService,private router:Router) {
    this.id_ENSEIGNANT=activatedRoute.snapshot.params.idEnseignant;
  }

  ngOnInit(): void {
  }

  rechParFormSpecialite(value: any) {
    this.classeService.getClasseSpecialite(value.specialite).subscribe({
      next:data=>{this.classetrouv=data},
    })
  }





}
