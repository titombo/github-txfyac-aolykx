import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.css']
})
export class EditModeComponent {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

}