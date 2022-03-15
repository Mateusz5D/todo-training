import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamPage } from './team.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TeamPage,
        }
      ]),
  OurTeamComponentModule
],
  	declarations: [TeamPage],
  	providers: [],
  	exports: [] })
export class TeamPageModule {
}
