import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private afs: AngularFirestore) {
  }

   public getTimeTable() {
     return this.afs.collection('tables').doc('times').get();
   }

   public setTimeTable(data: any) {
    return this.afs.collection('tables').doc('times').update(data);
  }
}
