import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechnologyPage } from './technology.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TechnologyPage,
        }
      ])],
  	declarations: [TechnologyPage],
  	providers: [],
  	exports: [] })
export class TechnologyPageModule {
}
