import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private date: Date = new Date();

  constructor() {}
  setDay(day: number): void {
    this.date.setDate(day);
  }

  getDay(): number {
    return this.date.getDate();
  }

  setMonth(month: number): void {
    this.date.setMonth(month - 1);
  }

  getMonth(): number {
    return this.date.getMonth() + 1;
  }
}
