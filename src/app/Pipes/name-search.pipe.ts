import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSearch',
  pure: true
})
export class NameSearchPipe implements PipeTransform {

  // transform(students: any, ValueSearch: any): any {

  //   if(ValueSearch===undefined){
  //     return students;
  //   }
  //   else{
  //     return students.filter( function(stu){
  //       return stu.name.toLowerCase().includes(ValueSearch.toLowerCase());
  //     })
  //   }
    
  //}
// "swetha" | nameSearch : s[]
//value - where , term - what to do..
  transform(value: any, term?: any[]): any {
    console.log("Value "+ value);
    console.log("term"+ term);
    //if(value.length ==0)
    //return [];
    if (term === undefined) {
      return value;
     
    } else {
      // var temp:any[]=[];
      // for(var i=0;i<value.length;i++){
      //   if(value[i].FirstName.startsWith(term))
      //     temp.push(value[i]);
      // }
      // return temp;
      return value.filter((item) => item.FirstName.startsWith(term));
    }
  };

}
