import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule,MatSlideToggleModule,MatMenuModule} from '@angular/material';
import {MatCardModule,MatChipsModule,MatTableModule} from '@angular/material';


@NgModule(
    {
        imports:[MatButtonModule,
             MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule,
             MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,MatChipsModule,MatTableModule],
        exports:[MatButtonModule, 
            MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule
            ,MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,MatChipsModule,MatTableModule]

    })
    export class MaterialModule

    {

    }