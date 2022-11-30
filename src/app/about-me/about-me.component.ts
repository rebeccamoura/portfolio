import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  allBioTexts: string[] = ['Seja bem-vindo ao meu mundo- ou um pequeno resumo dele. Estou dando meu melhor e colocando meu coração em cada aprendizado e projeto.', 'Seja bem-vindo ao meu mundo- ou um pequeno resumo dele. Minha história com a programação começou em um jogo e, desde então, sou apaixonada por desenvolvimento. Estudo todos os dias de maneira autodidata, sempre colocando meu coração em cada aprendizado e projeto.', 'Seja bem-vindo ao meu mundo- ou um pequeno resumo dele. Minha história com a programação começou em um jogo, que um amigo me disse que se semelhava bastante com lógica de programação. Eu, curiosa como sou, fui pesquisar sobre e, desde então, sou apaixonada por desenvolvimento. Dedico a maior parte dos meus dias para estudar, seja através de vídeoaulas ou lendo as documentações, sempre colocando meu coração em cada aprendizado e projeto. Mas minha trajetória não acaba aqui, ainda planejo me aprofundar mais e, futuramente, compartilhar meu conhecimento com o máximo de pessoas possível.'];
  bioText: string = this.allBioTexts[0];

  constructor() { }

  ngOnInit(): void {
  }

  changeTextSize(event: any) {
    this.bioText = this.allBioTexts[event.target.dataset.key]
  }

}
