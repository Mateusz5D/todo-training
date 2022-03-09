import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RealizationsPage } from './realizations.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: RealizationsPage,
        }
      ])],
  	declarations: [RealizationsPage],
  	providers: [],
  	exports: [] })
export class RealizationsPageModule {
}
