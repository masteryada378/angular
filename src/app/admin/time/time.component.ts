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
  public dataTime: any;

  constructor(private dbs: DataBaseService,
              public fb: FormBuilder,
              public loginService: LoginService) { }

  ngOnInit() {
    this.dbs.getTimeTable().subscribe((response: DocumentSnapshot<any>) => {
   //   console.log('First', response.data());
      this.dataTime = response.data();
    });
    this.formBuilder();
  }

  public formBuilder(): void {
    this.timeForm = this.fb.group({
      future: this.fb.group({
        indefinite: [['tomorrow']],
        continuous: [['when']],
        perfect: [['by7']]
      })
    });

    console.log(this.timeForm);
  }

}
