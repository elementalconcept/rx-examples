import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotColdPageComponent } from './pages/hot-cold-page/hot-cold-page.component';
import { ImmutablePageComponent } from './pages/immutable-page/immutable-page.component';
import { OperatorPageComponent } from './pages/operator-page/operator-page.component';


const routes: Routes = [
  { path: 'hot-cold', component: HotColdPageComponent },
  { path: 'immutable', component: ImmutablePageComponent },
  { path: 'operator', component: OperatorPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
