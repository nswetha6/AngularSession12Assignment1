import {DropDown} from './depdropdown.model';
import { Injectable } from '@angular/core';

@Injectable()

export class DropDownService{

    DepValue:DropDown[] = [{
        id:1,
        course:"CSE"
    },
        {
            id:2,
            course:"ECE"
        },
        {
            id:3,
            course:"EIE"
        },
        {
            id:4,
            course:"MECH"
        }];

    getCourseValues(){
       return this.DepValue;

    }
}