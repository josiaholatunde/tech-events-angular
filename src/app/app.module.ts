import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TechEventsComponent } from './tech-event.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbNailComponent } from './events/event-thumb-nail/event-thumb-nail.component';
import { EventsService } from './services/events-service.service';
import { ToastrService } from './services/toastr.service';

@NgModule({
  declarations: [
    TechEventsComponent,
    EventsListComponent,
    EventThumbNailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ EventsService, ToastrService ],
  bootstrap: [TechEventsComponent]
})
export class AppModule { }
