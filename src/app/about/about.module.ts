import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SelectModule } from '../select/select.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SelectModule,
    TranslateModule
  ]
})
export class AboutModule { }
