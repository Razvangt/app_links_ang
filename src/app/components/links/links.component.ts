import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LinksServiceService } from 'src/app/shared/components/links-service.service';
import { Link, ResponseLink } from 'src/app/shared/models/linkModel';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements AfterViewInit{
  public links: Link[] = [];
  displayedColumns: string[] = ['c_name', 'c_url', 'c_buttons'];
  dataSource: MatTableDataSource<Link>;
  constructor(
    private linksService: LinksServiceService,
    private router : Router
  ) {
    this.dataSource = new MatTableDataSource(this.links);
  }
  ngAfterViewInit(): void {
    this.getLinks();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getLinks(): void {
    this.linksService.getLinks().subscribe(
      (response: Link[]) => {
        this.dataSource.data = response;
        //this.dataSource.connect().next(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public editLinks(toEdit: Link) {
    this.router.navigate(['/edit-link',toEdit.id]);
  }
  public deleteLinks(toDelete: Link) {
    this.linksService.deleteLink(toDelete.id).subscribe(
      (response: ResponseLink) => {
        console.log(response);
        this.getLinks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
