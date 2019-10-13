import { Injectable } from '@angular/core';
import events from '../data/events.js'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents() {
    return events
  }
}
