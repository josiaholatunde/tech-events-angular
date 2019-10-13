import { Component, OnInit } from '@angular/core'
import { EventsService } from '../services/events-service.service.js';
import { ToastrService } from '../services/toastr.service.js';


@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html' 
})
export class EventsListComponent implements OnInit {
   
    public events: any[];

    public constructor(private eventsService: EventsService, private toastr: ToastrService) {}

    handleEventClick(data) {
        this.toastr.success(data);
    }

    ngOnInit(): void {
        this.events = this.eventsService.getEvents();
    }

    
}