import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  private movies = [];


  constructor() {

   }

  ngOnInit() {

  }
}
