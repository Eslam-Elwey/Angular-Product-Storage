import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './Components/RegisterComponent/register/register.component';
import { StudentComponent } from './Components/StudentComponent/student/student.component';
import { ValidationComponent } from "./Components/FormValidation/validation/validation.component";
import { NavbarComponent } from './Components/NavBar/navbar.component';
import { ProductComponent } from './Components/product/product.component';
import { DisplayProductComponent } from './Components/display-product/display-product.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, StudentComponent, ValidationComponent, NavbarComponent , ProductComponent ,DisplayProductComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo_project';

  // studentsDataArr :{name:string , age:string , id:number}[] = [] ;

  // getData(receivedData:any)
  // {
  //   receivedData.id = this.studentsDataArr.length+1 ;
  //   this.studentsDataArr.push(receivedData) ;
  //   this.studentsDataArr
  //   console.log("App" , this.studentsDataArr) ;
  // }

  studentData : {name:string , age:number|null, id:number|null} = {name:"" , age : null , id:null} ;

  // getData(receivedData:any)
  // {
  //   this.studentData = receivedData ;
  //   console.log("App" , this.studentData) ;
  // }

  productInfo:any ;

  receiveData(dataCont:any)
  {
    this.productInfo = dataCont ;
    console.log("App",this.productInfo) ;
  }

}
