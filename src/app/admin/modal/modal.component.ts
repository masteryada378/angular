import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onChanged = new EventEmitter<boolean>();
  
  modalWin(data:any) {
    console.log(data);
  }

}
