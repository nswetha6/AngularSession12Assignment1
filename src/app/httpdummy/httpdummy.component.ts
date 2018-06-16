import { Component, OnInit } from '@angular/core';
import {Dummy} from '../dummy';
import { DummyService } from '../dummy.service';



@Component({
  selector: 'app-httpdummy',
  templateUrl: './httpdummy.component.html',
  styleUrls: ['./httpdummy.component.css']
})
export class HttpdummyComponent implements OnInit {

  data:Dummy[] =[];
  constructor(private dum:DummyService) { }

    getData(){
      this.dum.getDummy().subscribe(data => {
        console.log( data);
        
      });
    }
  ngOnInit() {
  }

}
