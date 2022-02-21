import { Component, OnInit } from '@angular/core';
import { Seat } from './seat-interface';
import { SeatService } from './seat-service/seat.service';
import { SeatStatus } from './seat-status.enum';
@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss']
})
export class SeatBookingComponent implements OnInit {

  sideA: Seat[] = [];
  sideB: Seat[] = [];

  totalAvailable: number = 0;
  totalReserved: number = 0;
  totalBooked: number = 0;

  constructor(private seatService: SeatService) { }

  ngOnInit() {
   this.seatService.getSeats().subscribe(seats => {
     seats.forEach(seat => {
       if(seat.id.charAt(0) === 'A') {
         this.sideA.push(seat);
       } else if(seat.id.charAt(0) === 'B') {
         this.sideB.push(seat);
       }
     });
     this.updateCount();
   });
  }

  updateCount(): void {
    this.totalAvailable = this.sideA.filter(s => s.status === SeatStatus.AVAILABLE).length +
                          this.sideB.filter(s => s.status === SeatStatus.AVAILABLE).length;

    this.totalReserved = this.sideA.filter(s => s.status === SeatStatus.RESERVED).length +
                          this.sideB.filter(s => s.status === SeatStatus.RESERVED).length;

    this.totalBooked = this.sideA.filter(s => s.status === SeatStatus.BOOKED).length +
                      this.sideB.filter(s => s.status === SeatStatus.BOOKED).length;
  }
}
