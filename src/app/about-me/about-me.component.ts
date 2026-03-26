import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  allBioTexts: string[] = ['Seja bem-vindo ao meu mundo- ou um pequeno resumo dele.\n Adoro o desafio de transformar documentações complexas em interfaces que facilitam a vida de quem usa.\nBora construir algo legal?', 'Seja bem-vindo ao meu mundo- ou um pequeno resumo dele.\nTudo começou com um jogo e um palpite de um amigo: "isso aqui parece muito com lógica de programação". A curiosidade bateu e, 1 ano depois, aquela faísca virou minha carreira.\nHoje, após 4 anos de experiência profissional, adoro o desafio de transformar documentações complexas em interfaces que facilitam a vida de quem usa.\nBora construir algo legal?', 'Seja bem-vindo ao meu mundo- ou um pequeno resumo dele. Tudo começou com um jogo e um palpite de um amigo: "isso aqui parece muito com lógica de programação". A curiosidade bateu e, 1 ano depois, aquela faísca virou minha carreira.\nHoje, após 4 anos de experiência profissional, adoro o desafio de transformar documentações complexas em interfaces que facilitam a vida de quem usa. Sigo com aquela mesma paixão do início, mas com o pé no chão de quem busca código limpo e soluções que escalam. Meu plano? Continuar evoluindo e trocar conhecimento com o máximo de pessoas pelo caminho.\nBora construir algo legal?'];
  bioText: string = this.allBioTexts[0];

  constructor() { }

  ngOnInit(): void {
  }

  changeTextSize(event: any) {
    this.bioText = this.allBioTexts[event.target.dataset.key]
  }

}
