import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { CardBuscaComponent } from "./card-busca/card-busca.component";
import { CardDepoimentoComponent } from "./card-depoimento/card-depoimento.component";
import { CardComponent } from "./card/card.component";
import { ContainerComponent } from "./container/container.component";
import { DropdownUfComponent } from "./dropdown-uf/dropdown-uf.component";
import { FooterComponent } from "./footer/footer.component";
import { DateMaskDirective } from "./form-base/date-mask.directive";
import { FormBaseComponent } from "./form-base/form-base.component";
import { CompanhiasComponent } from "./form-busca/filtros-complementares/companhias/companhias.component";
import { FiltrosComplementaresComponent } from "./form-busca/filtros-complementares/filtros-complementares.component";
import { LabelComponent } from "./form-busca/filtros-complementares/label/label.component";
import { ParadasComponent } from "./form-busca/filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./form-busca/filtros-complementares/precos/precos.component";
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { PassagemDestaqueComponent } from "./form-busca/passagem-destaque/passagem-destaque.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SelecaoIdadeComponent } from "./selecao-idade/selecao-idade.component";


@NgModule({
    declarations: [
        BannerComponent,
        CardBuscaComponent,
        CardDepoimentoComponent,
        CardComponent,
        ContainerComponent,
        DropdownUfComponent,
        FooterComponent,
        DateMaskDirective,
        FormBaseComponent,
        CompanhiasComponent,
        HeaderComponent,
        ModalComponent,
        FormBuscaComponent,
        PassagemComponent,
        FiltrosComplementaresComponent,
        LabelComponent,
        ParadasComponent,
        PrecosComponent,
        PassagemDestaqueComponent,
        SelecaoIdadeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        BannerComponent,
        CardBuscaComponent,
        CardDepoimentoComponent,
        CardComponent,
        ContainerComponent,
        DropdownUfComponent,
        FooterComponent,
        DateMaskDirective,
        FormBaseComponent,
        CompanhiasComponent,
        HeaderComponent,
        ModalComponent,
        FormBuscaComponent,
        PassagemComponent,
        FiltrosComplementaresComponent,
        LabelComponent,
        ParadasComponent,
        PrecosComponent,
        PassagemDestaqueComponent,
    ]
})
export class SharedModule{}