import { HttpModule } from '@angular/http';
import { UsersListService } from './users-list/users-list.service';
import { CreateFormService } from './create-form/create-form.service';
import { UserData } from './userdata';
import { BrowserModule } from '@angular/platform-browser';
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    UsersListComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(UserData),
    RouterModule.forRoot([
      {path:"[create,0]", component:CreateFormComponent},
      {path:"create/:id", component:CreateFormComponent},
      {path:"list",component:UsersListComponent}
    ])

  ],
  providers: [CreateFormService,UsersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
