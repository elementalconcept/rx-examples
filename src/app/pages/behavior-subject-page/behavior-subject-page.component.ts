import { Component, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { ConsoleService } from '../../ui/console/console.service';

@Component({
  selector: 'app-behavior-subject-page',
  templateUrl: './behavior-subject-page.component.html',
  styleUrls: [ './behavior-subject-page.component.scss' ]
})
export class BehaviorSubjectPageComponent implements OnInit, OnDestroy {
  private accumulator = 0;
  private subject = new BehaviorSubject<number>(-1);

  constructor(private readonly con: ConsoleService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  emitEvent = () => this.subject.next(++this.accumulator);

  newSubscription = () => this.subject.pipe(untilDestroyed(this)).subscribe(n => this.con.log(n));
}
