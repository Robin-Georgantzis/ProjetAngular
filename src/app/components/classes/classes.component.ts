import { Component, OnInit } from '@angular/core';
import {Classe} from "../../entities/classe.entities";
import {ComfactsService} from "../../services/classeserv.service";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classe:Classe|null=null;
  numclasse:number=0;
  nom:string="";

  constructor(private classeService:ComfactsService) { }

  ngOnInit(): void {

  }

  onSearch() {
    this.classe=null;
    this.classeService.search(this.numclasse).subscribe({
      next:data=>this.classe = data,
      error:error=>alert("Erreur : "+error.headers.get("error"))
    })
  }
}
