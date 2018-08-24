import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movies = [];

  constructor(private _movieService: MoviesService) {
    this._movieService.getMovies().subscribe((res: any) => {
      this.movies = res.results;
      console.log(this.movies);
    });
   }

  ngOnInit() {
    this._movieService.getMovies();
  }

}
