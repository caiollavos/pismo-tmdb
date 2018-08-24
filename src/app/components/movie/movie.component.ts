import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Object;

  constructor(private router: ActivatedRoute, private _movieService: MoviesService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._movieService.getDetails(id).subscribe(movie => {
        this.movie = movie;
        console.log(this.movie);
      });
    });
  }



}
