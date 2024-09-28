

import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

//import { NameComponent } from './name.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    HeroComponent,
    ListComponent,],
  //declarations: [NameComponent],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  //providers: [],
})
export class HeroesModule{ }
