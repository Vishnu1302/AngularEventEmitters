import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() PData: string;
  @Output() childEvent = new EventEmitter();
  constructor() { }
  onChange(value) {
    this.childEvent.emit(value);
  }
  ngOnInit() {
  }

}
