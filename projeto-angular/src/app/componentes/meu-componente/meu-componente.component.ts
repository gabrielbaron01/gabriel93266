import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css'
})
export class MeuComponenteComponent {
  pessoa = {
    nome: 'João',
    idade: '26',
    cidade: 'São Paulo',
    interesses: ['Programação', 'Viagem', 'Fotografia']
  };
}
