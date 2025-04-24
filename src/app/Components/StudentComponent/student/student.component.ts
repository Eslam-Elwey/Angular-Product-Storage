import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: `./student.component.css`
})
export class StudentComponent implements OnChanges {


  // @Input() allStudentsData :{name:string , age:string , id:number}[] = [] ;
  @Input() oneStudentInfo :{name:string , age:number|null , id:number|null}= {name:"" , age : null , id:null} ;

  allStudentsData  :{name:string , age:number|null , id:number|null} [] = [] ;


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['oneStudentInfo']) ;
    if(!changes['oneStudentInfo'].firstChange)
    {
      this.oneStudentInfo.id = this.allStudentsData.length+1 ;
      this.allStudentsData.push(this.oneStudentInfo) ;
      console.log("Student Arr" ,this.allStudentsData) ;
    }
  }

}
