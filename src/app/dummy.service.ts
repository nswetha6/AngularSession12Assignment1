import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Dummy} from './dummy';
import 'rxjs/add/operator/map';
@Injectable()
export class DummyService {

  constructor(private htt:Http) { 

  }
  getDummy(){
    console.log("dummy in console");
    //get returns Observable<Response>
    //to convert this to Observable<Dummy[]> we used map function
   // return this.htt.get('/assets/dummy.json').map(res=> res.json());
   return this.htt.get('https://jsonplaceholder.typicode.com/users').map(res=>{
     return res.json();
   });
}

}
