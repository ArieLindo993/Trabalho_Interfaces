import { Component, signal } from '@angular/core';
import { ClientesCadastrar } from './components/clientes/clientes-cadastrar/clientes-cadastrar';

@Component({
  selector: 'app-root',
  imports: [ClientesCadastrar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Trabanho_Estrutura_Dados');
}
