import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { CardDepoimentoComponent } from './shared/card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './shared/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SelecaoIdadeComponent } from './shared/selecao-idade/selecao-idade.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PromocoesComponent } from './pages/home/promocoes/promocoes.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { DepoimentosComponent } from './pages/home/depoimentos/depoimentos.component';
import { LoginComponent } from './pages/login/login.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from "@angular/material/divider";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DateMaskDirective } from './shared/form-base/date-mask.directive';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { BuscaComponent } from './pages/busca/busca.component';
import { PassagemComponent } from './shared/passagem/passagem.component';
import { FiltrosComplementaresComponent } from './shared/form-busca/filtros-complementares/filtros-complementares.component';
import { CompanhiasComponent } from './shared/form-busca/filtros-complementares/companhias/companhias.component';
import { LabelComponent } from './shared/form-busca/filtros-complementares/label/label.component';
import { ParadasComponent } from './shared/form-busca/filtros-complementares/paradas/paradas.component';
import { PrecosComponent } from './shared/form-busca/filtros-complementares/precos/precos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    SelecaoIdadeComponent,
    PromocoesComponent,
    DropdownUfComponent,
    DepoimentosComponent,
    LoginComponent,
    FormBaseComponent,
    CadastroComponent,
    DateMaskDirective,
    PerfilComponent,
    BuscaComponent,
    PassagemComponent,
    FiltrosComplementaresComponent,
    CompanhiasComponent,
    LabelComponent,
    ParadasComponent,
    PrecosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    { 
      provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
      provideNgxMask({
        dropSpecialCharacters: false,
      }
    ),
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true 
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
