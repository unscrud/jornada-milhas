import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { UsuarioService } from "./services/usuario.service"

export const authGuard = () => {
    const userService = inject(UsuarioService)
    const router = inject(Router)

    if (userService.estaLogado()){
        return true
    } else {
        router.navigate(['/login'])
        return false
    }
}