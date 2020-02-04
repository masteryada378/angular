import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataBaseService } from 'src/app/shared/data-base.service';

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
    private dbs: DataBaseService,) { }

  ngOnInit() {
  }

 // @Output() onChanged = new EventEmitter<boolean>();
  
 public chengeInput(event, words, y) {
  this.dbs.chengeInput(event, words, y);
}
public addSpeech(words) {
}
public killSpeech(string) {
}
public onChanged(data: any) {
}

}
