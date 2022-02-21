import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { SeatStatus } from './seat-status.enum';

@Directive({
  selector: '[appSeat]'
})
export class SeatDirective implements OnInit {

  @Input() seatDetail: BehaviorSubject<SeatStatus>
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.seatDetail.subscribe(seat => {
      if (seat === SeatStatus.AVAILABLE) {
        this.element.nativeElement.firstChild.style.color = 'green';
      } else if (seat === SeatStatus.BOOKED) {
        this.element.nativeElement.firstChild.style.color = 'red';
      } else {
        this.element.nativeElement.firstChild.style.color = 'orange';
      }
    });
  }
}
