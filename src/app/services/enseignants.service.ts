import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Enseignant} from "../entities/enseignant.entities"; // environment.prod si on veut passer en mode prod
import {Classe} from "../entities/classe.entities";

@Injectable({providedIn:"root"})
export class EnseignantsService{
  private host = environment.host

  constructor(private httpClient:HttpClient) {
  }
  getEnseignant(idenseignant:number):Observable<Enseignant> {
    return this.httpClient.get<Enseignant>(this.host+"/enseignants/"+idenseignant);
  }
  getEnseignantNom(nom:string):Observable<Enseignant[]> {
    return this.httpClient.get<Enseignant[]>(this.host+"/enseignants/nom="+nom);
  }

  getEnseignantClasse(id_ENSEIGNANT: number) : Observable<Enseignant[]>{
    return this.httpClient.get<Enseignant[]>(this.host + '/enseignants/id_ENSEIGNANT=' + id_ENSEIGNANT);
  }

  deleteEnseignant(e:Enseignant):Observable<void>{
    return this.httpClient.delete<void>(this.host+"/enseignants/"+ e.id_ENSEIGNANT);
  }

  save(e: Enseignant): Observable<Enseignant>{
    return this.httpClient.post<Enseignant>(this.host + '/enseignants/', e);
  }
  updateEnseignant(e: Enseignant): Observable<Enseignant>{
    return this.httpClient.put<Enseignant>(this.host + '/enseignants/' + e.id_ENSEIGNANT, e);
  }
}

