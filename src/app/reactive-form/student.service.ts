import { Student } from './student.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    studentInfo:Student[]=[];
    // constructor(){
    //     this.studentInfo.push({
    //         FirstName:'swetha',
    //   MiddleName:'mlopk',
    //   LastName:'pallavi',
    //   Department:'CSE',
    //   Date:new Date()
    //     });

    //     this.studentInfo.push({
    //         FirstName:'praneeth',
    //   MiddleName:'mlopk',
    //   LastName:'pallavi',
    //   Department:'CSE',
    //   Date:new Date()
    //     })
    // }
    getStudentValues(slistVal:Student)
    {
        this.studentInfo.unshift(slistVal);
    }
    getFinalStudentList(){
        return this.studentInfo;
    }

    removeStudent(removeid:number){
            //return this.studentInfo.filter((item) => item.id != removeid);
            //3 students : id = 2, index = 1
            //0 : id = 1
            //1: id = 2
            for(var i=0;i<this.studentInfo.length;i++)
            {
              if(this.studentInfo[i].id == removeid){
                    this.studentInfo.splice(i,1);
                  
                    break;
                }
            }
            console.log("service removed");
            console.log(this.studentInfo);
        }
    
    }