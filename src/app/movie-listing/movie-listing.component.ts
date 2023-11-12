import { Component } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css'],
})
export class MovieListingComponent {
  constructor(private service: MovieService) {}

  ngOnInit() {
    this.LoadMovies();
  }

  dataSource: any;
  movieList: any;

  LoadMovies() {
    this.service.GetAll().subscribe((res) => {
      console.log(res);
      this.movieList = res;
      this.dataSource = new MatTableDataSource(this.movieList);
    });
  }

  UpdateMovie(code: any) {}
  DeleteMovie(code: any) {}

  displayedColumns: string[] = [
    'id',
    'name',
    'rating',
    'relaseDate',
    'director',
    'action',
  ];
}
