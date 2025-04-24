import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name = "" ;
  age = "" ;

  get ageStatus()
  {
    if((+this.age>=10)&&(+this.age<=30))
    {
      return true ;
    }
    return false ;
  }

  get nameStatus()
  {
    if(this.name.trim().length>=3)
    {
      return true ;
    }
    return false ;
  }

  @Output()  fireEvent = new EventEmitter() ;

  SendData()
  {
    console.log("Register" ,this.name , this.age ) ;
    if(this.ageStatus&&this.nameStatus)
    {
      this.fireEvent.emit({name:this.name.trim() , age:this.age}) ;
      this.name ="" ;
      this.age = "" ;
    }
    else
    {
      console.log("Invlaid Data Entry")
    }

  }

}
