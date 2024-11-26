import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function equalTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const fieldValue = control.value;
        const otherFieldValue = control.root.get(otherField)?.value;

        if (!fieldValue) {
            return null; // não valida campo vazio
        }

        if (fieldValue !== otherFieldValue) {
            return {equalTo: true};
        }

        return null;
    };
}