import { Component, OnInit } from '@angular/core';
import {EnseignantsService} from "../../services/enseignants.service";
import {Enseignant} from "../../entities/enseignant.entities";
import {Router} from "@angular/router";


@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {

  enseignant:Enseignant|null=null;
  numrech:number=0;
  nom:string="";
  enseignanttrouv?:Enseignant[];


  constructor(private enseignantService:EnseignantsService,private router:Router) { }

  ngOnInit(): void {
    this.onSearchById(6);
  }

  /*recherche(){
    this.enseignant = null;
    this.enseignantService.getEnseignant(this.numrech).subscribe({
      next:data=>this.enseignant=data,
      error:error=>alert("erreur"+error.header.get("error"))
    })
  }*/


  onSearchById(idenseignant:number){
    this.enseignantService.getEnseignant(idenseignant).subscribe({
      next:data=>this.enseignant = data,
      error:error=>alert(error)
    })
  }


  rechParFormNom(value: any) {
    this.enseignantService.getEnseignantNom(value.nom).subscribe({
      next:data=>{this.enseignanttrouv=data},
    })
  }

  suppEnseignant(e: Enseignant) {
    this.enseignantService.deleteEnseignant(e).subscribe({
      next: data => {
        alert("Record effacé");
        //this.rechParFormNom(e)
        const index = this.enseignanttrouv?.indexOf(e,0);
        if(!(index===undefined) && index>-1){
          this.enseignanttrouv?.splice(index,1);
        }
      },
      error: error => {alert("Erreur d'effacement : " + error.headers.get("error"))}
    })
  }

  onNewClient() {this.router.navigateByUrl("newEnseignant"); }

  onEdit(c: Enseignant) {
    this.router.navigateByUrl('editEnseignant/'+c.id_ENSEIGNANT);
  }

}
