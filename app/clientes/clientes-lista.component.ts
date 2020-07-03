import {Component} from '@angular/core';

import { Cliente } from './cliente.model';

@Component({
    moduleId: module.id,
    selector : 'clientes-lista',
    templateUrl: 'clientes-lista.component.html'
})
export class ClientesListaComponent {

    clientes : Cliente[] ;
}