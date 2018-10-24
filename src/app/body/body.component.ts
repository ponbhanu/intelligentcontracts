import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
uploadform;
  constructor() 
  {
    this.uploadform = new FormGroup({
      selectfile: new FormControl(),
      
    })
   }
   


  ngOnInit() {
  }

}
