import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [OurTeamComponent],
  	providers: [],
  	exports: [OurTeamComponent] })
export class OurTeamComponentModule {
}
