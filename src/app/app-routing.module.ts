import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotColdPageComponent } from './pages/hot-cold-page/hot-cold-page.component';
import { ImmutablePageComponent } from './pages/immutable-page/immutable-page.component';


const routes: Routes = [
  { path: 'hot-cold', component: HotColdPageComponent },
  { path: 'immutable', component: ImmutablePageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
