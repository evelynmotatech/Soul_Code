import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
  this.jogoDaVelhaService.inicializar();
  }

  get showInicio():boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  get showTabuleiro():boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }

  get showFinal():boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  get jogador():number{
    return this.jogoDaVelhaService.jogador;
  }

  iniciarJogo(): void{
    this.jogoDaVelhaService.iniciarJogo();
  }
  jogar(posX: number,poxY:number):void{
    this.jogoDaVelhaService.jogar(posX,poxY);    
  }
  exibirX(posX:number,posY:number): boolean{
    return this.jogoDaVelhaService.exibirX(posX,posY)
  }
  exibirO(posX:number,posY:number): boolean{
    return this.jogoDaVelhaService.exibirO(posX,posY)
  }
  exibirVitoria(posX:number,posY:number): boolean{
    return this.jogoDaVelhaService.exibirVitoria(posX,posY)
  }

  novoJogo():void{
    this.jogoDaVelhaService.novoJogo();
  }
}
