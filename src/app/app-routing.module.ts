import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { PerfilComponent } from './autenticacao/perfil/perfil.component';
import { BuscaComponent } from './busca/busca.component';
import { authGuard } from './autenticacao/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "cadastro",
    component: CadastroComponent,
  },
  {
    path: "busca",
    component: BuscaComponent,
  },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
