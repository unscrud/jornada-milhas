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
import { FormBuscaComponent } from "./form-busca/form-busca.component";
import { HeaderComponent } from "./header/header.component";
import { ModalComponent } from "./modal/modal.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SelecaoIdadeComponent } from "./selecao-idade/selecao-idade.component";
import { RouterModule } from "@angular/router";


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
        HeaderComponent,
        ModalComponent,
        FormBuscaComponent,
        SelecaoIdadeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
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
        HeaderComponent,
        ModalComponent,
        FormBuscaComponent,
    ]
})
export class SharedModule {}