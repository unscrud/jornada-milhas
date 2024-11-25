import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BuscaComponent } from "./busca.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { BuscaRoutingModule } from "./busca-routing.module";

@NgModule({
    declarations: [
        BuscaComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
        LabelComponent,
        FiltrosComplementaresComponent,
        PassagemComponent,
        PassagemDestaqueComponent,
    ],
    imports:[
        CommonModule,
        MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        BuscaRoutingModule,
    ],
    exports: [
        BuscaComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
        LabelComponent,
        FiltrosComplementaresComponent,
        PassagemComponent,
        PassagemDestaqueComponent,
    ]
})
export class BuscaModule {}