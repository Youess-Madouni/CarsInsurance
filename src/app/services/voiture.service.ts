import { Voiture } from './../model/voiture';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  voitureCollection:AngularFirestoreCollection<Voiture>
  voitureDocument:AngularFirestoreDocument<Voiture>
  constructor(private afs:AngularFirestore) {
    this.voitureCollection = this.afs.collection('vehicules')
   }

   add(vehicule:Voiture) {
     this.voitureCollection.add(vehicule)
      
   }
  
  //  
   getAll(user:string) :Observable<Voiture[]> {
      return this.afs.collection('vehicules',ref =>ref.where('user','==',user)).snapshotChanges().pipe(
         map(actions => {
          return  actions.map(a => {
            const data= a.payload.doc.data() as Voiture
            const id =a.payload.doc.id;
            return {id, ...data}
          })
         })
      )
   }

   deleteVehicule(id:string) {
    this.voitureDocument=this.voitureCollection.doc(id)
    this.voitureDocument.delete()
   }
}
