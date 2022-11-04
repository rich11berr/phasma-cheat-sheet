import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CheatsheetComponent } from './pages/cheatsheet/cheatsheet.component';
import { CursedComponent } from './pages/cursed/cursed.component';
import { GhostsComponent } from './pages/ghosts/ghosts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cheatsheet',
    pathMatch: 'full'
  },
  {
    path: 'cheatsheet',
    component: CheatsheetComponent,
  },
  {
    path: 'ghosts',
    component: GhostsComponent
  },
  {
    path: 'cursed',
    component: CursedComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
