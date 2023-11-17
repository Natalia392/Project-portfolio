import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
