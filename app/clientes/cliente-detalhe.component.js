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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const cliente_model_1 = require("./cliente.model");
const cliente_service_1 = require("./cliente.service");
let ClienteDetalheComponent = class ClienteDetalheComponent {
    constructor(clienteService, route, location) {
        this.clienteService = clienteService;
        this.route = route;
        this.location = location;
        //estamos incluindo um novo cliente
        this.isNovo = true;
    }
    ngOnInit() {
        this.cliente = new cliente_model_1.Cliente(0, '', '', '');
        this.route.params.forEach((params) => {
            let id = +params['id'];
            if (id) {
                //se o id do cliente existe então estamos alterando
                this.isNovo = false;
                this.clienteService.getCliente(id)
                    .then((cliente) => {
                    console.log(cliente);
                    this.cliente = cliente;
                });
            }
        });
    }
    getFormGroupClass(isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    // será executado quando o formulário for submetido
    onSubmit() {
        let promise;
        if (this.isNovo) {
            console.log('cadastrar');
            promise = this.clienteService.create(this.cliente);
        }
        else {
            console.log('alterar');
            promise = this.clienteService.update(this.cliente);
        }
        promise.then(cliente => this.location.back());
    }
};
ClienteDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cliente-detalhe',
        templateUrl: 'cliente-detalhe.component.html'
    }),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService,
        router_1.ActivatedRoute,
        common_1.Location])
], ClienteDetalheComponent);
exports.ClienteDetalheComponent = ClienteDetalheComponent;
//# sourceMappingURL=cliente-detalhe.component.js.map