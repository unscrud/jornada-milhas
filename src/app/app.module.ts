import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './pages/home/promocoes/promocoes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';
import { LoginComponent } from './pages/login/login.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { BuscaComponent } from './pages/busca/busca.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    CadastroComponent,
    DepoimentosComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    PromocoesComponent,
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
