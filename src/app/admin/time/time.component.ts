import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/shared/data-base.service';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public  timeForm: FormGroup;
  
  constructor(private dbs: DataBaseService,
              public fb: FormBuilder,
              public loginService: LoginService) { }

  ngOnInit() {
//TODO подписаться на дата тайм и сохранить в переменную    
  }

// TODO добавить метод который открывает модалку и повестить его на кнопку шоу в разметке

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
