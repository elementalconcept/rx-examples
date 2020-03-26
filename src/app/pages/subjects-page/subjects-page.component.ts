import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { ConsoleService } from '../../ui/console/console.service';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: [ './subjects-page.component.scss' ]
})
export class SubjectsPageComponent implements OnInit, OnDestroy {
  private accumulator = 0;
  private subject = new Subject<number>();

  constructor(private readonly con: ConsoleService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  emitEvent = () => this.subject.next(++this.accumulator);

  newSubscription = () => this.subject.pipe(untilDestroyed(this)).subscribe(n => this.con.log(n));
}
