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
var dialogconfirm_service_1 = require("./../dialogconfirm.service");
var core_1 = require("@angular/core");
var cliente_service_1 = require("./cliente.service");
var ClientesListaComponent = /** @class */ (function () {
    function ClientesListaComponent(clienteService, dialogconfirmService) {
        this.clienteService = clienteService;
        this.dialogconfirmService = dialogconfirmService;
    }
    ClientesListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clienteService.getClientes()
            .then(function (clientes) {
            _this.clientes = clientes;
        }).catch(function (err) { return console.log(err); });
    };
    ClientesListaComponent.prototype.onDelete = function (cliente) {
        var _this = this;
        this.dialogconfirmService.confirm('Deseja excluir o cliente ' + cliente.nome + ' ?')
            .then(function (podeDeletar) {
            if (podeDeletar) {
                _this.clienteService
                    .delete(cliente)
                    .then(function () {
                    _this.clientes = _this.clientes.filter(function (c) { return c.id != cliente.id; });
                }).catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    ClientesListaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clientes-lista',
            templateUrl: 'clientes-lista.component.html'
        }),
        __metadata("design:paramtypes", [cliente_service_1.ClienteService, dialogconfirm_service_1.DialogConfirmService])
    ], ClientesListaComponent);
    return ClientesListaComponent;
}());
exports.ClientesListaComponent = ClientesListaComponent;
//# sourceMappingURL=clientes-lista.component.js.map