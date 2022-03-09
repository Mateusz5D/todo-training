import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Technology2Page } from './technology2.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: Technology2Page,
        }
      ])],
  	declarations: [Technology2Page],
  	providers: [],
  	exports: [] })
export class Technology2PageModule {
}
