import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ClientesModule } from './clientes/clientes.module';
import { HttpModule } from '@angular/http';
@NgModule({
    imports : [AppRoutingModule, BrowserModule, ClientesModule, HttpModule],
    declarations :[AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}