import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { TimerService } from '../../services/timer.service';
import { ConsoleService } from '../../ui/console/console.service';

@UntilDestroy()
@Component({
  selector: 'app-memory-leak-page',
  templateUrl: './memory-leak-page.component.html',
  styleUrls: [ './memory-leak-page.component.scss' ]
})
export class MemoryLeakPageComponent implements OnInit {
  constructor(private readonly timerService: TimerService,
              private readonly con: ConsoleService) {
  }

  ngOnInit() {
    // This leaks
    this.timerService.timer$
      .subscribe(t => this.con.log(`Tick: ${ t }`));

    // This only takes first five events
    // this.timerService.timer$
    //   .pipe(take(5))
    //   .subscribe(t => this.con.log(`Tick: ${ t }`));

    // This un-subscribes automatically
    // this.timerService.timer$
    //   .pipe(untilDestroyed(this))
    //   .subscribe(t => this.con.log(`Tick: ${ t }`));
  }
}
