import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListaComponent } from './clientes-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe.component';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({ 
    imports : [ 
        CommonModule,
        ClienteRoutingModule
    ],
     declarations : [
         ClientesListaComponent,
         ClienteDetalheComponent
     ],
     exports : [ ClientesListaComponent]
})
export class ClientesModule {}