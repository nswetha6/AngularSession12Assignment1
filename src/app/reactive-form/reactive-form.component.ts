import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Student } from './student.model';
import {StudentService} from './student.service';
import { DropDownService } from './depdropdown.service';
import { DropDown } from './depdropdown.model';


@Component({
  //selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
  
})
export class ReactiveFormComponent implements OnInit {

  /* FirstName:FormControl = new FormControl('',
    [
      Validators.required,
      Validators.maxLength(4)
    ]);
  MiddleName:FormControl= new FormControl('',Validators.minLength(3));
  //FormGroup('',Validators.required);
  */
    term:string;
    rform:FormGroup;
    stdntVal:Student;
    slist:Student;
    FinalStdntList:Student[] =[];
    DropDownList:DropDown[];
    submitted:boolean=false;

  constructor(private fb:FormBuilder,private stdserv:StudentService, private dropserv:DropDownService) {
    console.log("reactive constructor");
   }

  ngOnInit() {
    /* 
    this.rform = new FormGroup(
      {
        FirstName: new FormControl('',
        [
          Validators.required,
          Validators.maxLength(4)
        ]),
        MiddleName:new FormControl('', Validators.minLength(3)),
        LastName:new FormControl(''),
        Department:new FormControl(''),
        Date: new FormControl(new Date())
      }
    ) 
    */
   console.log("initt of reactive comp");
    this.rform = this.fb.group({
      FirstName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4)
      ]),
      MiddleName:new FormControl(''),
      LastName:new FormControl('', 
          [Validators.required,
          Validators.minLength(3)]
        ),
      Department:new FormControl(''),
      Date: new FormControl(new Date())

      // FirstName:('',[Validators.required,
      // Validators.minLength(3)]),
      // MiddleName:('',Validators.maxLength(10)),

    })
    this.DropDownList= this.dropserv.getCourseValues();
    console.log("list in reactive");
    console.log(this.FinalStdntList);
    this.FinalStdntList = this.stdserv.getFinalStudentList();
  }

  get FirstName(){
    return this.rform.controls.FirstName.value;
  }

    static id:number=0;
  addFormValues(stdntVal:Student){
    this.slist={
      id:++ReactiveFormComponent.id,
      FirstName:stdntVal.FirstName,
      MiddleName:stdntVal.MiddleName,
      LastName:stdntVal.LastName,
      Department:stdntVal.Department,
      Date:stdntVal.Date
        }
      //if(stdntVal.FirstName.length!==0 && stdntVal.LastName.length!==0){
      //  if(this.rform.valid){
        this.submitted=true;
    this.stdserv.getStudentValues(this.slist);
    this.FinalStdntList = this.stdserv.getFinalStudentList();
    console.log(this.FinalStdntList);
 //     }
   //  else{
     //  alert ("please fill firstname and lastname");
     
 // }
}
resetForm(){
  this.rform.reset();
}

//copying below code of remove id to student list componenet..

/* remove(sid:number){
  console.log(sid);
  this.stdserv.removeStudent(sid);
  console.log("component remove after servcie call");
  console.log(this.stdserv.getFinalStudentList());
  this.FinalStdntList = this.stdserv.getFinalStudentList();  
}
*/
// val:string;
// onUse(val){
//     this.val=val;
// }
}
