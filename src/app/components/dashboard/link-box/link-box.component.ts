import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/linkModel';

@Component({
  selector: 'app-link-box',
  templateUrl: './link-box.component.html',
  styleUrls: ['./link-box.component.css']
})
export class LinkBoxComponent  {
  
  @Input() link!: Link;
  constructor() { }

  goTo() {
    window.open(this.link.url.toString(), '_blank');
  }
}


