import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule,FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentService } from './reactive-form/student.service';
import { DropDownService } from './reactive-form/depdropdown.service';
import { NameSearchPipe } from './Pipes/name-search.pipe';
import { TestDirectDirective } from './test-direct.directive';
import { HttpdummyComponent } from './httpdummy/httpdummy.component';
import { DummyService } from './dummy.service';
import { StudentListCompComponent } from './student-list-comp/student-list-comp.component';
import {RouterModule,Routes} from '@angular/router';
import { CapitalfirstPipe } from './Pipes/capitalfirst.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes =[
  {path:'AddStudent', component: ReactiveFormComponent },
  {path:'StudentsList', component: StudentListCompComponent },
  {path:'StudentsList/:FirstName', component: StudentListCompComponent },
  {path:'', redirectTo:'/AddStudent', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    NameSearchPipe,
    TestDirectDirective,
    HttpdummyComponent,
    StudentListCompComponent,
    CapitalfirstPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService,DropDownService,
  DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
