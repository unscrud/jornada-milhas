import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private userService: UsuarioService,
    private router: Router
  ) {}

  user$ = this.userService.returnUser();

  logout(){
    this.userService.logout();
    this.router.navigate(['auth/login']);
  }
}
