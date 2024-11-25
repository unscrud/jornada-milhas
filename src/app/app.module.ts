import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { HomeModule } from './home/home.module';
import { BuscaModule } from './busca/busca.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskPipe,
    NgxMaskDirective,
    MaterialModule,
    HomeModule,
    BuscaModule,
  ],
  providers: [
    provideNgxMask({
      dropSpecialCharacters: false,
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true 
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
