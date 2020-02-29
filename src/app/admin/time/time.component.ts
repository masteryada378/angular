import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/shared/data-base.service';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public bsModalRef: BsModalRef;
  public timeForm: FormGroup;
  public dataArray: DocumentSnapshot<any>[];
  public dataTime: DocumentSnapshot<any>;
  public dataKeyNames: string[] = ["future_indef", "future_cont", "future_perfect", "future_per_cont",
                                   "pre_indef", "pre_con", "pre-perf", "pre_per_cont" ,
                                   "past_indef", "past-cont", "past-per", "past-perf-co"];

 // public dataBehavior: new BehaviorSubject<any>(null);  
  constructor(private dbs: DataBaseService,
              public fb: FormBuilder,
              public loginService: LoginService,
              private modalService: BsModalService) { }

  ngOnInit() {
//TODO подписаться на дата тайм и сохранить в переменную
  this.dbs.dataTime.subscribe((response: DocumentSnapshot<any>) => {
      this.dataTime = response;
    });
    
    this.modalService.onHide.subscribe((resp) => {
      
      console.log(this.dataTime);
      this.dbs.setTimeTable(this.dataTime); 
       
    })
  }

  public makeDataArray = ( ) => {

  }
  // TODO добавить метод который открывает модалку и повестить его на кнопку шоу в разметке
  public openModalWithComponent(item) {
    const initialState = {
      title: 'A few examples',
    //  robot: this.dbs.dataTime,
      data: item,
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}