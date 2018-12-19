import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    
    const headers = new HttpHeaders()
      .set('content-type', 'text/html')
      .set('accept', '*/*')
      .set('Access-Control-Allow-Origin', '*')

    return this.httpClient.get(this.testUrl + `cpf_cnpj=${term}` + `&protocolo=${term2}` + `&tipo_pesquisa=cpf`, {headers,});
  }
}


// 291.726.288-55
// 00319802018 