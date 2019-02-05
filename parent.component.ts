import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public CData: string;
  constructor() { }

  ngOnInit() {
  }

}
