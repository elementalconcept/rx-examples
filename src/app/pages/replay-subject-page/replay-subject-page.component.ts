import { Component, OnInit } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ConsoleService } from '../../ui/console/console.service';

@UntilDestroy()
@Component({
  selector: 'app-replay-subject-page',
  templateUrl: './replay-subject-page.component.html',
  styleUrls: [ './replay-subject-page.component.scss' ]
})
export class ReplaySubjectPageComponent implements OnInit {
  private accumulator = 0;
  private subject = new ReplaySubject<number>(3);

  constructor(private readonly con: ConsoleService) {
  }

  ngOnInit() {
  }

  emitEvent = () => this.subject.next(++this.accumulator);

  newSubscription = () => this.subject.pipe(untilDestroyed(this)).subscribe(n => this.con.log(n));
}
