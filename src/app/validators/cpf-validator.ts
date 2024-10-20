import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;

    if (!cpf) return null; // não valida campo vazio

    // Remove caracteres não numéricos
    const cpfClean: string = cpf.replace(/\D/g, "");

    // Verifica se possui 11 dígitos
    if (cpfClean.length !== 11) return { cpfInvalido: true };

    // Verifica se todos os digitos são iguais (exemplo: 1111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpfClean)) return { cpfInvalido: true };

    let soma = 0;
    let resto;

    // Primeiro digito verificador
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpfClean.substring(i - 1, i), 10) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpfClean.substring(9, 10), 10))
      return { cpfInvalido: true };

    // Segundo digito verificador
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpfClean.substring(i - 1, i), 10) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpfClean.substring(10, 11), 10))
      return { cpfInvalido: true };

    return null;
  };
}
