import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { HomePageModule } from './pages/home.page-module';
import { TeamPageModule } from './pages/team.page-module';
import { RealizationsPageModule } from './pages/realizations.page-module';
import { TechnologyPageModule } from './pages/technology.page-module';
import { Technology1PageModule } from './pages/technology1.page-module';
import { Technology2PageModule } from './pages/technology2.page-module';

const routes: Routes = [{ 
        path: 'onass', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'team', 
        loadChildren: () => TeamPageModule
      },
  { 
        path: 'realizacje', 
        loadChildren: () => RealizationsPageModule
      },
  { 
        path: 'technologia', 
        loadChildren: () => TechnologyPageModule
      },
  { 
        path: 'technology1', 
        loadChildren: () => Technology1PageModule
      },
  { 
        path: 'technology2', 
        loadChildren: () => Technology2PageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, AboutUsPageModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
