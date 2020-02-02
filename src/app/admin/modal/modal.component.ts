import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  title: string;
  closeBtnName: string;
  data: any;
  
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  @Output() onChanged = new EventEmitter<boolean>();
  
}
