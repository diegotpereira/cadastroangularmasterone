import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { CLIENTES } from './clientes-mock';
@Injectable()
export class ClienteService{
    getClientes() : Cliente[]  {
        return CLIENTES;
    }
}