import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

@Component({
    moduleId: module.id,
    selector : 'cliente-detalhe',
    templateUrl : 'cliente-detalhe.component.html'
})
export class ClienteDetalheComponent  implements OnInit{
    cliente : Cliente;
    constructor(
       private clienteService : ClienteService,
       private route : ActivatedRoute,
       private location : Location
    ) {}
     ngOnInit(): void {
         this.route.params.forEach((params: Params)=>{
             let id: number = +params['id'];
        if(id) {
                this.clienteService.getCliente(id)
                   .then((cliente: Cliente)=> {
                     console.log(cliente);
                     this.cliente = cliente;
                });
             }
   });
}
}