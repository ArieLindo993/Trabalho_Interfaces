import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-clientes-cadastrar',
  imports: [
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    InputMaskModule,
  ],
  styleUrl: './clientes-cadastrar.css',
  templateUrl: './clientes-cadastrar.html',
})
export class ClientesCadastrar {
  tipoPessoa: 'PF' | 'PJ' = 'PF';
  tipoPessoaOptions: { descricao: string; valor: 'PF' | 'PJ' }[] = [
    { descricao: 'Pessoa Física', valor: 'PF' },
    { descricao: 'Pessoa Jurídica', valor: 'PJ' },
  ];
}
