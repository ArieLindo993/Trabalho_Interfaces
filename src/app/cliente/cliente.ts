import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    InputMaskModule,],
  selector: 'app-cliente',
  styleUrl: './cliente.css',
  templateUrl: './cliente.html',
})
export class Cliente {
  tipoPessoa: string = 'PF';
    tipoPessoaOptions: any[] = [
    { descricao: 'Pessoa Física', valor: 'PF'},
    { descricao: 'Pessoa Jurídica', valor: 'PJ'}
  ];
}
