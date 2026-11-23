import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nome = 'Bem-vindo ao nosso portal';

  servicos = [
    {
      titulo: 'Atendimento',
      descricao: 'Encontre orientações e canais de atendimento.'
    },
    {
      titulo: 'Informações',
      descricao: 'Consulte informações importantes de forma simples.'
    },
    {
      titulo: 'Suporte',
      descricao: 'Veja como obter ajuda quando precisar.'
    }
  ];
}
