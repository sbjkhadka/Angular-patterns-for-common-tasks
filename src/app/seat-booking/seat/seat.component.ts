import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Seat } from '../seat-interface';
import { SeatStatus } from '../seat-status.enum';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  @Input() seat: Seat;
  status: BehaviorSubject<SeatStatus>;
  constructor() { }

  ngOnInit() {
    if(this.seat) {
      this.status = new BehaviorSubject<SeatStatus>(this.seat.status);
    }

    this.status.subscribe(status => {});
  }

}
