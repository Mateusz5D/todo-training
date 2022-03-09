import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamPage } from './team.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TeamPage,
        }
      ])],
  	declarations: [TeamPage],
  	providers: [],
  	exports: [] })
export class TeamPageModule {
}
