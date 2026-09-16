import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClientesService {

    private readonly chamadaHttp = inject(HttpClient);

    UrlCliente: string = "http://localhost:8080/clientesT";

    SalvarCliente(cliente: any) {
        return this.chamadaHttp.post<any>(`${this.UrlCliente}/salvar-cliente`, cliente);
    }
}
