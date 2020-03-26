import { Component, OnInit } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ConsoleService } from './console.service';

@UntilDestroy()
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: [ './console.component.scss' ]
})
export class ConsoleComponent implements OnInit {
  log: any[];

  constructor(private readonly console: ConsoleService) {
  }

  ngOnInit() {
    this.log = [];

    this.console.messages
      .pipe(untilDestroyed(this))
      .subscribe(msg => this.log.push(msg));

    this.console.clearEvent
      .pipe(untilDestroyed(this))
      .subscribe(() => this.log = []);
  }
}
