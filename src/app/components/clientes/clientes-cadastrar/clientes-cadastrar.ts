import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-clientes-cadastrar',
  imports: [
    ReactiveFormsModule,
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

  formularioCliente!: FormGroup;

  mensagemValidacao?: string;

  tipoPessoaOptions: { descricao: string; valor: 'PF' | 'PJ' }[] = [
    { descricao: 'Pessoa Física', valor: 'PF' },
    { descricao: 'Pessoa Jurídica', valor: 'PJ' },
  ];

  constructor( private readonly criadorFormulario: FormBuilder) {}

  ngOnInit(): void{
    this.criarFormularioCliente();
  }

  criarFormularioCliente(){
    this.formularioCliente = this.criadorFormulario.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      tipoPessoa: ['PF', Validators.required],
      cpfCnpj: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required]
    })
  }
}
