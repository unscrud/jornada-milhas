import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function telefoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const telefone = control.value;

        if (!telefone) {
            return null; // não valida campo vazio
        }

        // Remove caracteres não numéricos
        const telefoneClean: string = telefone.replace(/\D/g, '');

        // Verifica se tem 10 (fixo) ou 11 (celular) dígitos
        if (telefoneClean.length === 10 
                || telefoneClean.length === 11)
            return null; // telefone válido

        return {telefoneInvalido: true};
    };
}