import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {


  myRegForm = new FormGroup({
    name:new FormControl(null,[Validators.required , Validators.minLength(3)]),
    age:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(30)])
  })

  getData(name:any , age:any)
  {
    // console.log(name,age) ;
    console.log(this.myRegForm.controls['name']) ;
    console.log(this.myRegForm.controls['age']) ;
  }

}
