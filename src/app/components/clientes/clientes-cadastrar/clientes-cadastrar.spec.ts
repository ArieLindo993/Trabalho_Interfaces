import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesCadastrar } from './clientes-cadastrar';

describe('ClientesCadastrar', () => {
  let component: ClientesCadastrar;
  let fixture: ComponentFixture<ClientesCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [ClientesCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

