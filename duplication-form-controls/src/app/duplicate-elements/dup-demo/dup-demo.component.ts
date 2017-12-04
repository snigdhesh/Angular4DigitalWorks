import { FormBuilder,FormArray} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-dup-demo',
  templateUrl: './dup-demo.component.html',
  styleUrls: ['./dup-demo.component.css']
})
export class DupDemoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  dupForm:FormGroup;

  patterns=[
    {"name":"MatchRegEx"},
    {"name":"BeginsWith"},
    {"name":"EndsWith"},
    {"name":"contains"}
  ]

  show:boolean;

  ngOnInit() {
    this.dupForm=this.fb.group({
      toggleDisplay:false,
      regex:this.fb.array([this.buildRegEx()])
    }) 
    this.dupForm.get('toggleDisplay').valueChanges.subscribe(()=>{
      this.show=!this.show
    })
  }

  get regExpressions():FormArray{
    return <FormArray>this.dupForm.get('regex');
  }  

  buildRegEx():FormGroup{
   return this.fb.group({
    regexdropdown:null,
    regex:null 
   })
  }

  addExpressions():void{
    this.regExpressions.push(this.buildRegEx());
  }
  removeExpressions(y):void{
    this.regExpressions.controls.splice(y,1);
    console.log(this.regExpressions);
    console.log(this.dupForm.get('regex').value);
    this.dupForm.patchValue({
      regex:this.regExpressions.controls
    })
    console.log(this.dupForm.get('regex').value);
  }

}
