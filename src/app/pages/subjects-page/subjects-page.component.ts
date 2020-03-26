import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ConsoleService } from '../../ui/console/console.service';

@UntilDestroy()
@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: [ './subjects-page.component.scss' ]
})
export class SubjectsPageComponent implements OnInit {
  private accumulator = 0;
  private subject = new Subject<number>();

  constructor(private readonly con: ConsoleService) {
  }

  ngOnInit() {
  }

  emitEvent = () => this.subject.next(++this.accumulator);

  newSubscription = () => this.subject.pipe(untilDestroyed(this)).subscribe(n => this.con.log(n));
}
