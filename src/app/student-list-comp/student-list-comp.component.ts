import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../reactive-form/student.model';
import { StudentService } from '../reactive-form/student.service';

@Component({
  selector: 'app-student-list-comp',
  templateUrl: './student-list-comp.component.html',
  styleUrls: ['./student-list-comp.component.css']
})
export class StudentListCompComponent implements OnInit {

//  @Input()  FinalStdntList;
@Input()  slist:Student[];
//FinalStdnts:Student[];
FinalStdntList:Student[];
  s:Student;
  constructor(private stdserv:StudentService) { }

  ngOnInit() {
    console.log("init of stud list");
   // console.log(this.FinalStdnts);
    this.slist = this.stdserv.getFinalStudentList();
    console.log(this.slist);
    
  }
  remove(sid:number){
    console.log(sid);
    this.stdserv.removeStudent(sid);
    console.log("component remove after servcie call");
    console.log(this.stdserv.getFinalStudentList());
    //this.FinalStdnts = this.stdserv.getFinalStudentList();  
    this.FinalStdntList = this.stdserv.getFinalStudentList();  
  }
  val:string;
    onUse(val){
    this.val=val;
}
}
 