import {Enseignant} from './enseignant.entities';

export interface Classe {
  id_CLASSE:number;
  sigle:string;
  annee:number;
  specialite:string;
  nbreeleves:number;
  enseignant:Enseignant;
}
