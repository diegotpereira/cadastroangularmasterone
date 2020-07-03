import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Cliente } from './cliente.model';
import { CLIENTES } from './cliente.mock';

@Injectable()
export class ClienteService{
   // app é a pasta de onde fizermos a chamada
   // clientes é o nome da variável na classe InMemoryDataService
   private clientesUrl : string = 'app/clientes';
   private headers: Headers = new Headers ({'Content-Type' : 'application/json'})
    constructor(
       private http: Http
    ) {}
    getClientes() : Promise<Cliente[]> {
         return this.http.get(this.clientesUrl) 
         .toPromise()
         .then(response => response.json().data as Cliente[])
         .catch(this.trataErro);
      }
    private trataErro(err : any) : Promise<any> {
        return Promise.reject(err.message || err );
      }
    getCliente(id:number): Promise<Cliente> {
           return this.getClientes()
           .then((clientes: Cliente[]) => clientes.find(cliente => cliente.id === id)); 
    }
    create(cliente: Cliente): Promise<Cliente> {
        return this.http.post(this.clientesUrl, JSON.stringify(cliente), {headers:this.headers})
        .toPromise()
        .then((response : Response) => {
            console.log(response.json().data);
            return response.json().data as Cliente;  
        })
        .catch(this.trataErro);
    }
    update(cliente: Cliente): Promise<Cliente> {
        const url = `${this.clientesUrl}/${cliente.id}`; //app/cliente/:id
        return this.http
        .put(url, JSON.stringify(cliente), {headers:this.headers})
        .toPromise()
        .then(() => cliente as Cliente)  
        .catch(this.trataErro);
    } 
    delete(cliente: Cliente): Promise<Cliente> {
        const url = `${this.clientesUrl}/${cliente.id}`; //app/cliente/:id
        return this.http
        .delete(url, {headers:this.headers})
        .toPromise()
        .then(() => cliente as Cliente)  
        .catch(this.trataErro);
    }  
}