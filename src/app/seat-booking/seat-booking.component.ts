import { Component, OnInit } from '@angular/core';
import { Seat } from './seat-interface';
import { SeatService } from './seat-service/seat.service';
@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss']
})
export class SeatBookingComponent implements OnInit {

  sideA: Seat[] = [];
  sideB: Seat[] = [];
  constructor(private seatService: SeatService) { }

  ngOnInit() {
   this.seatService.getSeats().subscribe(seats => {
     seats.forEach(seat => {
       if(seat.id.charAt(0) === 'A') {
         this.sideA.push(seat);
       } else {
         this.sideB.push(seat);
       }
     });
   });
  }

}




