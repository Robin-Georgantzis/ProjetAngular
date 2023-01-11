import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classe} from "../entities/classe.entities";
import {Enseignant} from "../entities/enseignant.entities";


@Injectable({providedIn:"root"})
export class ComfactsService {
  private host = environment.host
  constructor(private httpClient:HttpClient) {
  }

  /*getComfact(numcommande:number):Observable<Comfact> {
    return this.httpClient.get<Comfact>(this.host+"/comfacts/"+numcommande);
  }*/

  search(id:number):Observable<Classe>{
    return this.httpClient.get<Classe>(this.host+"/classe/"+id);
  }

  deleteClasse(c: Classe): Observable<void>{
    return this.httpClient.delete<void>(this.host + '/classe/' + c.id_CLASSE);
  }
  save(c: Classe,e:Enseignant): Observable<Classe>{
    c.enseignant;
    return this.httpClient.post<Classe>(this.host + '/classe/',c);
  }

  updateComfact(c: Classe): Observable<Classe>{
    return this.httpClient.put<Classe>(this.host + '/classe/' + c.id_CLASSE, c);
  }

  getClasseEnseignant(id_ENSEIGNANT: number) : Observable<Classe[]>{
    return this.httpClient.get<Classe[]>(this.host + '/classe/id_ENSEIGNANT=' + id_ENSEIGNANT);
  }

  getClasseSpecialite(specialite:string):Observable<Classe[]> {
    return this.httpClient.get<Classe[]>(this.host+"/classe/specialite="+specialite);
  }

  searchByNbreEleves(nbreeleves:number) : Observable<Classe[]>{
    return this.httpClient.get<Classe[]>(this.host+"/classe/nbreeleves="+nbreeleves);
  }
}
