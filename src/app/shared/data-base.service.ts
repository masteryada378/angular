import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentSnapshot} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class DataBaseService {

  public dataTime = new BehaviorSubject<any>(null);

  constructor(private afs: AngularFirestore) {
    this.getTimeTable().subscribe((response: DocumentSnapshot < any > ) => {
      this.dataTime.next(response.data());
    });
  }
  
  public getTimeTable() {
    return this.afs.collection('tables').doc('times').get();
  }

  public setTimeTable(data: any) {
    return this.afs.collection('tables').doc('times').update(data);
  }

  public chengeInput(event, words, i) {
   console.log('ool', words[i], event.target.value)
    words[i] = event.target.value;
    console.log(words[i]);
   this.setTimeTable(this.dataTime)
  }

  public addSpeech(words) {
    words.push('');
  }

  public killSpeech(string) {
    console.log(string);
  }

  public onChanged(data: any) {
    console.log(data);
  }
}
