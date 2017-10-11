import { Subscription } from 'rxjs/Rx';

import { IUserDetails } from './userdetails';
import { CreateFormService } from './create-form.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  userform:FormGroup;
  users:IUserDetails;
  errormessage:any;
  sub:Subscription

  constructor(private fb:FormBuilder,private createformservice:CreateFormService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {    
    
    this.userform = this.fb.group({

      name:[null,Validators.required],
      email:[null,Validators.required],
      phone:[null,Validators.required]    

    })

    this.sub=this.route.params.subscribe(
      params=>{
        let id=+params['id'];
        this.getUser(id);
        
      }
    )
  
  }

  private getUser(id:number):void{
    this.createformservice.getUser(id)
    .subscribe(
      (user:IUserDetails)=>this.onRetrievedUser(user),
    (error:any)=>this.errormessage=error)
  }



  formReset(){
    this.userform.reset();
  }

  onRetrievedUser(user:IUserDetails):void{
    if(this.userform){
      this.userform.reset();
    }
    this.users=user;

    this.userform.patchValue({
      name:this.users.name,
      email:this.users.email,
      phone:this.users.phone
    })

  }

  saveUser(){
    if(this.userform.dirty && this.userform.valid){
      let p =Object.assign({},this.users,this.userform.value)
      console.log(p);

      this.createformservice.saveUser(p)
      .subscribe(
        ()=>this.onSaveComplete(),
        (error:any)=>this.errormessage=error);
      }
        else if (!this.userform.dirty){

          this.onSaveComplete();

        }
    }
    onSaveComplete():void{
      this.userform.reset();
      this.router.navigate(['/list']);
  
    }


  }




