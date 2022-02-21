import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seat } from '../seat-interface';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  private seatsURL = '/api/seats/';
  constructor(private http: HttpClient) { }

  getSeats(): Observable<Seat[]> {
    return this.http.get<Seat[]>(this.seatsURL);
  }

  public getSeat(number: any): Observable<Seat> {
    return this.http.get<Seat>(`${this.seatsURL}${number}`);
  }

  public updateSeatStatus(seat: Seat): Observable<any> {
    return this.http.put(`${ this.seatsURL}${seat.id}`, seat);
  }

}
