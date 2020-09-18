import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentSnapshot} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class DataBaseService {

  public dataTime = new BehaviorSubject<any>(null);

  constructor(private afs: AngularFirestore) {
    this.getTimeTable().subscribe((response: DocumentSnapshot < any > ) => {
      this.dataTime.next(response.data());
      console.log(this.dataTime);
    });
  }
  
  public getTimeTable() {
    return this.afs.collection('tables').doc('times').get();
  }

  public setTimeTable(data: any) {
    return this.afs.collection('tables').doc('times').update(data);
  }

  // TODO создать массив имен для перебора и перебирать здесь 
  public getMyData(time: string) {
    return this.afs.collection('tables').doc(time).get();
  }




  
}
