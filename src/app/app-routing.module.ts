import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotColdPageComponent } from './pages/hot-cold-page/hot-cold-page.component';


const routes: Routes = [
  { path: 'hot-cold', component: HotColdPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
