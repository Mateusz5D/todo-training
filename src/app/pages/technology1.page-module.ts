import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Technology1Page } from './technology1.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: Technology1Page,
        }
      ])],
  	declarations: [Technology1Page],
  	providers: [],
  	exports: [] })
export class Technology1PageModule {
}
