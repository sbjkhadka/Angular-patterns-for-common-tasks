import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { Person } from './person.interface';
import { SAMPLE_DATA } from './sample-data.model';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.scss']
})
export class InlineEditingComponent implements OnInit {

  //optional vars
  selectedJSON = '';

  rows = new FormArray([]);
  form = new FormGroup({
    lines: this.rows
  });

  displayedColumns: string[] = ['name', 'email', 'action'];
  dataSource = new BehaviorSubject<MatTableDataSource<AbstractControl>>(new MatTableDataSource<AbstractControl>([]));

  ngOnInit(): void {
    this.prepareTable();
   }

   prepareTable(): void {
     // inserts elements from the API
     SAMPLE_DATA.forEach(d => {
       this.addRow(d);
     });

     // insert an empty row at the first row of the table
     this.addEmptyRow();
   }

  addRow(person: Person): void {
    const fg = new FormGroup({
      id: new FormControl(person.id), // id column is not in the template but it is declared here
      name: new FormControl(person.name),
      email: new FormControl(person.email)
    });
    this.rows.insert(0, fg);
    this.dataSource.next(new MatTableDataSource<AbstractControl>(this.rows.controls));
  }

  selectRow(row: any): void {
    this.selectedJSON = row.value;
  }

  addEmptyRow(): void {
    const person: Person = {
      name: '',
      email: ''
    };
    this.addRow(person);
  }

  deleteRow(element: AbstractControl, index: number): void {
    // Make API call to delete this row using id from element

    // Update dataSource
    this.rows.removeAt(index);
    this.dataSource.next(new MatTableDataSource<AbstractControl>(this.rows.controls));
  }
}
