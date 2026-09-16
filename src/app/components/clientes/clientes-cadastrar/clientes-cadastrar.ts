import { ClientesService } from './../../clientes-service';
import { Component, inject, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonDirective } from 'primeng/button';
import { Save } from '@primeicons/angular/save';
import { Times } from '@primeicons/angular/times';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-cadastrar',
  imports: [
    InputTextModule,
    FloatLabelModule,
    CardModule,
    SelectModule,
    InputMaskModule,
    ButtonDirective,
    Save,
    Times,
    ReactiveFormsModule
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

  private readonly ClientesService = inject(ClientesService);

  constructor(private readonly criadorFormulario: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormularioCliente();
  }

  criarFormularioCliente() {
    this.formularioCliente = this.criadorFormulario.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      tipoPessoa: ['PF', Validators.required],
      cpfCnpj: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required]
    })
  }

  salvarCliente() {
    this.formularioCliente.markAllAsTouched();
    if(this.formularioCliente.invalid) {
      console.log('Formulário inválido!');
    } else {
      console.log('-----------------------Objeto em JavaScript');
      console.log(this.formularioCliente.value);
      console.log('-----------------------Objeto em JSON');
      console.log(JSON.stringify(this.formularioCliente.value));
      this.ClientesService.SalvarCliente(this.formularioCliente.value)
        .subscribe({
          next: (resposta:any) => {
            console.log("Cliente salvo com sucesso!");
            console.log(resposta);
          },
          error: (erroRetornado:any) => {
            console.error("Erro ao salvar cliente: ", erroRetornado);
          }
        })
    }
  }
}
