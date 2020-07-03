"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const dialogconfirm_service_1 = require("./../dialogconfirm.service");
const core_1 = require("@angular/core");
const cliente_service_1 = require("./cliente.service");
let ClientesListaComponent = class ClientesListaComponent {
    constructor(clienteService, dialogconfirmService) {
        this.clienteService = clienteService;
        this.dialogconfirmService = dialogconfirmService;
    }
    ngOnInit() {
        this.clienteService.getClientes()
            .then((clientes) => {
            this.clientes = clientes;
        }).catch(err => console.log(err));
    }
    onDelete(cliente) {
        this.dialogconfirmService.confirm('Deseja excluir o cliente ' + cliente.nome + ' ?')
            .then((podeDeletar) => {
            if (podeDeletar) {
                this.clienteService
                    .delete(cliente)
                    .then(() => {
                    this.clientes = this.clientes.filter((c) => c.id != cliente.id);
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }
};
ClientesListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'clientes-lista',
        templateUrl: 'clientes-lista.component.html'
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService, dialogconfirm_service_1.DialogConfirmService])
], ClientesListaComponent);
exports.ClientesListaComponent = ClientesListaComponent;
//# sourceMappingURL=clientes-lista.component.js.map