import { SeatStatus } from "./seat-status.enum";

export interface Seat {
    id: string;
    status: SeatStatus
}
