import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/shared/data-base.service';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public bsModalRef: BsModalRef;
  public timeForm: FormGroup;
  public dataTableResponse: any;
  public dataTime: any;
  
  constructor(private dbs: DataBaseService,
              public fb: FormBuilder,
              public loginService: LoginService,
              private modalService: BsModalService) { }

  ngOnInit() {
//TODO подписаться на дата тайм и сохранить в переменную
    this.dbs.dataTime.subscribe((response: DocumentSnapshot<any>) => {
      this.dataTime = response;
    });
  }

  // TODO добавить метод который открывает модалку и повестить его на кнопку шоу в разметке
  public openModalWithComponent() {
    const initialState = {
      list: ['...'],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


// доделать модалку !!! 
// TODO перенести в модал  
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


    // this.dataTable = this.dbs.dataTime.subscribe((response: DocumentSnapshot<any>)=>{
    //   console.log('TUTAs',response);
    //   if(response){
    //     this.dataTableResponse = response;
    //   }
    // })
    // console.log("32",this.dataTableResponse);