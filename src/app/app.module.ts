import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotColdPageComponent } from './pages/hot-cold-page/hot-cold-page.component';
import { HeaderComponent } from './ui/header/header.component';
import { ConsoleComponent } from './ui/console/console.component';
import { ImmutablePageComponent } from './pages/immutable-page/immutable-page.component';
import { OperatorPageComponent } from './pages/operator-page/operator-page.component';
import { SubjectsPageComponent } from './pages/subjects-page/subjects-page.component';
import { BehaviorSubjectPageComponent } from './pages/behavior-subject-page/behavior-subject-page.component';
import { ReplaySubjectPageComponent } from './pages/replay-subject-page/replay-subject-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HotColdPageComponent,
    HeaderComponent,
    ConsoleComponent,
    ImmutablePageComponent,
    OperatorPageComponent,
    SubjectsPageComponent,
    BehaviorSubjectPageComponent,
    ReplaySubjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
