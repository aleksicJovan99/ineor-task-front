import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../service/director/director.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-director-listing',
  templateUrl: './director-listing.component.html',
  styleUrls: ['./director-listing.component.css'],
})
export class DirectorListingComponent {
  constructor(private service: DirectorService) {}

  ngOnInit() {
    this.LoadDirectors();
  }

  dataSource: any;
  userList: any;

  LoadDirectors() {
    this.service.GetAll().subscribe((res) => {
      console.log(res);
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
    });
  }

  UpdateDirector(code: any) {}
  DeleteDirector(code: any) {}

  displayedColumns: string[] = ['id', 'name'];
}
