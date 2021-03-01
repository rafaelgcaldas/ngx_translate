import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [SelectComponent]
})
export class SelectModule { }
