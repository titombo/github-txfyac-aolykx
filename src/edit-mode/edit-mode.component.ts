import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MessageService } from '../app/services/index';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.css']
})
export class EditModeComponent {

  myControl = new FormControl();
  links = [{
    text: "Test",
    link: "https://emaua.com"
  }]

  arrayInputs = [{linkName : '', linkAddress:'',  linkDescription:'' }];

 sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage((this.formName.get('controllerArray') as FormArray));
    }

setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.fb.group(address));
    const formArray = this.fb.array(arrayFG);
    this.formName.setControl('controllerArray', formArray);
  }

ngOnInit() { this.setArrayInputs(this.arrayInputs) }

addInput() {
  
  (this.formName.get('controllerArray') as FormArray).push(this.fb.group({
  linkName:'', 
  linkAddress:'',
  linkDescription:''}
)) }

removeInput(index) { this.formName.controls.controllerArray["controls"].splice(index,1) }

formName =this.fb.group({
    controllerArray: this.fb.array([])
  })  

  constructor(private fb: FormBuilder, 
  private messageService: MessageService) { }
}