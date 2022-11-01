import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Link } from 'src/app/shared/models/linkModel';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
const links : Link[] = [
  {
    id : 'sasfaf',
    name : 'google',
    url : 'google.com'
  },
  {
    id : 'sasfaf',
    name : 'google',
    url : 'google.com'
  }
]

const tryData = [
  { title: 'Card 1', cols: 2, rows: 1 ,links},
  { title: 'Card 1', cols: 1, rows: 1 ,links},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return tryData;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  addWorkSpace(){}
  editWorkSpace(){}
  deleteWorkSpace(){}
  drop(event: CdkDragDrop<Link[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }  
}
