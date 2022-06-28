import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../mock-questions';
import { ControlType } from '../controlType';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions = QUESTIONS;
  checked: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}
  
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
  }

  hasTypeTextBox(type: ControlType): boolean {
    if(type=1)
    {
      return true;
    }
    return false;
  }

  hasTypeRadioButton(type: ControlType): boolean {
    if(type=2)
    {
      return true;
    }
    return false;
  }
  
  hasTypeCheckbox(type: ControlType): boolean {
    if(type=3)
    {
      return true;
    }
    return false;
  }

}
