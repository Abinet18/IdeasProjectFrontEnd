import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule,MatSlideToggleModule,MatMenuModule} from '@angular/material';
<<<<<<< HEAD
import {MatCardModule,MatChipsModule,MatTableModule} from '@angular/material';
=======
import {MatCardModule,MatChipsModule,MatTableModule,MatListModule} from '@angular/material';
>>>>>>> 8e471910708852b9129c0a280dd957c9223e5944


@NgModule(
    {
        imports:[MatButtonModule,
             MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule,
<<<<<<< HEAD
             MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,MatChipsModule,MatTableModule],
        exports:[MatButtonModule, 
            MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule
            ,MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,MatChipsModule,MatTableModule]
=======
             MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,MatChipsModule,MatTableModule,MatListModule],
        exports:[MatButtonModule, 
            MatCheckboxModule,MatFormFieldModule,MatInputModule,MatRadioModule
            ,MatSelectModule,MatSlideToggleModule,MatMenuModule,MatCardModule,MatChipsModule,MatTableModule,MatListModule]
>>>>>>> 8e471910708852b9129c0a280dd957c9223e5944

    })
    export class MaterialModule

    {

    }