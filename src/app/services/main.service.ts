import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/html'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private testUrl = 'http://protocolosfpc.2rm.eb.mil.br/buscaDadosProcessoInteressado.php?'

  public loading: boolean;
  public initialised: boolean;
  public results = [];

  constructor(private httpClient: HttpClient) { }

  searchTest(term: string, term2: string) {
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'false');
    console.log(httpOptions);
    return this.httpClient.get(
      this.testUrl + `cpf_cnpj=${term}` + `&protocolo=${term2}` + `&tipo_pesquisa=cpf`
    );
  }
}
