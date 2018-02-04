import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  ideaForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.ideaForm=fb.group({
      'title':['',Validators.required],
      'type':['',Validators.required],
      'idea':['',Validators.minLength(100)]
    });
  }

  ngOnInit() {
    this.ideaForm.statusChanges.subscribe(
      data=>{console.log(data);}
    );
  }
  onSubmit(form)
  {
    console.log(this.ideaForm.controls.title.value);
  }

}
