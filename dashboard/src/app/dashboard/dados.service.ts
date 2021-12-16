import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class DadosService {

  readonly dados = [    
    ['Junho', 27],
    ['Julho', 45],
    ['Agosto', 72],
    ['Setembro', 27]    
  ];

  constructor() { }

  /**
   * next: notifica quando um novo dado está disponivel para ser utilizado
   * complete: sinaliza que finalizou e encerra a esculta do Observable.
   * @returns 
   */
  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}
