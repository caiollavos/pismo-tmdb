import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './../model/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'api_key=bcdbb89c73eda85e76cb8abfcabbda7a';
  private baseUrl = 'https://api.themoviedb.org/3/discover/movie?';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie?';
  private movieUrl = 'https://api.themoviedb.org/3/movie/';
  private testUrl = 'http://protocolosfpc.2rm.eb.mil.br/buscaDadosProcessoInteressado.php?'

  public loading: boolean;
  public initialised: boolean;
  public movies = [];

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get(this.baseUrl + this.apiKey);
  }

  searchMovies(term: string, term2: string, term3: string) {
    return this.httpClient.get(this.searchUrl + this.apiKey + `&query=${term + term2 + term3}`);
  }

  searchTest(term: string, term2: string, term3: string) {
    return this.httpClient.get(this.testUrl + `cpf_cnpj=${term}` + `&protocolo=${term2}` + `&tipo_pesquisa=cpf`);
  }

  getDetails(id: number) {
    return this.httpClient.get(this.movieUrl + id + '?' + this.apiKey);
  }
}
