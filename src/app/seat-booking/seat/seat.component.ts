import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Seat } from '../seat-interface';
import { SeatService } from '../seat-service/seat.service';
import { SeatStatus } from '../seat-status.enum';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @ViewChild('icon') ikon: ElementRef;
  @Output() updateCountEvent = new EventEmitter();
  @Input() seat: Seat;
  status: BehaviorSubject<SeatStatus>;
  SeatStatus = SeatStatus; // for the usage in template
  constructor(private seatService: SeatService,
    private renderer: Renderer2) { }

  ngOnInit() {
    if (this.seat) {
      this.status = new BehaviorSubject<SeatStatus>(this.seat.status);
    }
  }

  updateSeat(status: SeatStatus): void {
    this.applyUpdate(status);
    // Reserved seat will be AVAILABLE if it is not BOOKED within certain time (5s for testing)
    // Should be made longer in productipon
    if (status === SeatStatus.RESERVED) {
      setTimeout(() => {
        setTimeout(() => {
          this.applyUpdate(SeatStatus.AVAILABLE);
          this.renderer.removeClass(this.ikon.nativeElement, 'blink_me');
        }, 5000);
        this.renderer.addClass(this.ikon.nativeElement, 'blink_me');
      }, 3000);
    }
  }

  private applyUpdate(status: SeatStatus): void {
    this.status.next(status);
    this.seat.status = status;
    this.seatService.updateSeatStatus(this.seat).subscribe(res => {
      this.updateCountEvent.emit();
    });
  }
}
