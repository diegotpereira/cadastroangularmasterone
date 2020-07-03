import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { CLIENTES } from './cliente.mock';
@Injectable()
export class ClienteService{
    getClientes() : Promise<Cliente[]>  {
        return Promise.resolve(CLIENTES);
    }
}