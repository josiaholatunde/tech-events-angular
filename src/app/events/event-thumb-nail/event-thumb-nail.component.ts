import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-event-thumb-nail',
    templateUrl: './event-thumb-nail.component.html'
})
export class EventThumbNailComponent {

    @Input() event: any;
    @Output() evntClick = new EventEmitter();

    handleClick() {
        this.evntClick.emit('You clicke me famQ!')
    }
}