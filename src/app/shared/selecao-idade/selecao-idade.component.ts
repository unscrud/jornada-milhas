import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao-idade',
  templateUrl: './selecao-idade.component.html',
  styleUrls: ['./selecao-idade.component.scss']
})
export class SelecaoIdadeComponent {

  @Input() tipo: "adulto" | "crianca" | "bebe" = "adulto"

  titulo: string = ''
  descricao: string = ''

  ngOnInit() {
    this.definirConteudoPelo(this.tipo)
  }  

  definirConteudoPelo(tipo: "adulto" | "crianca" | "bebe"){
    switch(tipo){
      case "crianca":
        this.titulo = "Crianças" 
        this.descricao = "(Entre 2 e 11 anos)"
        break
      case "bebe":
        this.titulo = "Bebês" 
        this.descricao = "(Até 2 anos)"
        break
      default:
        this.titulo = "Adultos" 
        this.descricao = "(Acima de 12 anos)"
    }
  }
}
