import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styleUrls: ['./dynamic-controls.component.scss']
})
export class DynamicControlsComponent implements OnInit {

  form = new FormGroup({
    cities: new FormArray([new FormControl('Python'), new FormControl('Java')]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get cities(): FormArray {
    return this.form.get('cities') as FormArray;
  }

  addCity(): void {
    this.cities.push(new FormControl());
  }

}
