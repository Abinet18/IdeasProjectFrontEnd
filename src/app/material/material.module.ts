import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule,MatSlideToggleModule,MatMenuModule} from '@angular/material';
import {MatCardModule,MatChipsModule,MatTableModule,MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';



@NgModule(
    {
        imports:[MatButtonModule,
             MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule,
             MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,
             MatChipsModule,MatTableModule,MatListModule,MatIconModule],
        exports:[MatButtonModule, 
            MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule
            ,MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,
            MatChipsModule,MatTableModule,MatListModule,MatIconModule]

    })
    export class MaterialModule

    {

    }