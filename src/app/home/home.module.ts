import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SelectModule } from '../select/select.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SelectModule,
    TranslateModule
  ]
})
export class HomeModule { }
