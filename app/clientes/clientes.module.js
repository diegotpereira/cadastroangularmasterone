"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const clientes_lista_component_1 = require("./clientes-lista.component");
const cliente_detalhe_component_1 = require("./cliente-detalhe.component");
const cliente_routing_module_1 = require("./cliente-routing.module");
const cliente_service_1 = require("./cliente.service");
const forms_1 = require("@angular/forms");
let ClientesModule = class ClientesModule {
};
ClientesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            cliente_routing_module_1.ClienteRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            clientes_lista_component_1.ClientesListaComponent,
            cliente_detalhe_component_1.ClienteDetalheComponent
        ],
        exports: [clientes_lista_component_1.ClientesListaComponent],
        providers: [
            cliente_service_1.ClienteService
        ]
    })
], ClientesModule);
exports.ClientesModule = ClientesModule;
//# sourceMappingURL=clientes.module.js.map