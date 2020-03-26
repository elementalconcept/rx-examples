import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotColdPageComponent } from './pages/hot-cold-page/hot-cold-page.component';
import { ImmutablePageComponent } from './pages/immutable-page/immutable-page.component';
import { OperatorPageComponent } from './pages/operator-page/operator-page.component';
import { SubjectsPageComponent } from './pages/subjects-page/subjects-page.component';
import { BehaviorSubjectPageComponent } from './pages/behavior-subject-page/behavior-subject-page.component';
import { ReplaySubjectPageComponent } from './pages/replay-subject-page/replay-subject-page.component';
import { MemoryLeakPageComponent } from './pages/memory-leak-page/memory-leak-page.component';
import { ExecutionOrderComponent } from './pages/execution-order/execution-order.component';

const routes: Routes = [
  { path: 'hot-cold', component: HotColdPageComponent },
  { path: 'immutable', component: ImmutablePageComponent },
  { path: 'operator', component: OperatorPageComponent },
  { path: 'subjects', component: SubjectsPageComponent },
  { path: 'behavior-subject', component: BehaviorSubjectPageComponent },
  { path: 'replay-subject', component: ReplaySubjectPageComponent },
  { path: 'memory-leak', component: MemoryLeakPageComponent },
  { path: 'exec-order', component: ExecutionOrderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
