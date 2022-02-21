import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Seat } from './seat-interface';
import { SeatStatus } from './seat-status.enum';

@Directive({
  selector: '[appSeat]'
})
export class SeatDirective implements OnInit {

  @Input() seatDetail: Seat;
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    if(this.seatDetail.status === SeatStatus.AVAILABLE) {
      this.element.nativeElement.style.backgroundColor = 'green';
    } else if (this.seatDetail.status === SeatStatus.BOOKED) {
      this.element.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.element.nativeElement.style.backgroundColor = 'red';
    }
  }

}
