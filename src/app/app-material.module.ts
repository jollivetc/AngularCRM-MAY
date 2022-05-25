import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';


const importExport=[MatInputModule, MatButtonModule, MatToolbarModule,MatFormFieldModule, MatIconModule, MatSelectModule]

@NgModule({
  declarations: [],
  imports: importExport,
  exports: importExport
})
export class AppMaterialModule { }
