import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesCadastrar } from './clientes-cadastrar';

describe('ClientesCadastrar', () => {
  let component: ClientesCadastrar;
  let fixture: ComponentFixture<ClientesCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
