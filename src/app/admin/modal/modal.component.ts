import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {DataBaseService} from 'src/app/shared/data-base.service';
import {AngularFirestore, DocumentSnapshot} from '@angular/fire/firestore';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  title: string;
  closeBtnName: string;
  data: any;

  constructor(public bsModalRef: BsModalRef,
    private dbs: DataBaseService, ) {}

  ngOnInit() {
    console.log(this.data);
  }
  // @Output() onChanged = new EventEmitter<boolean>();

  
  public addSpeech() {
    this.data.words.push('');
  }

  public killSpeech(i) {
    this.data.words.splice(i, 1);

  }

  public chengeInput(event, i) {
    this.data.words[i] = event.target.value;
    console.log(this.data.words[i]);
  }

  public getData(time: string){
    
    this.dbs.getMyData(time).subscribe((response: DocumentSnapshot < any >)=>{
     // console.dir(response.data());
    })
    
  }

  public closeWindow(){

    this.bsModalRef.hide();
  }

}
