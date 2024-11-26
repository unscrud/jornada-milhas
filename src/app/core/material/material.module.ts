import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from "@angular/material/divider";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    exports: [
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
        MatRadioModule,
        MatDividerModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatSliderModule,
        MatSnackBarModule,
    ],
    providers: [
        { 
            provide: MAT_DATE_LOCALE, useValue: "pt-BR"
        },
    ]
})
export class MaterialModule {}