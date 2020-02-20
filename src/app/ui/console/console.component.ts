import { Component, OnDestroy, OnInit } from '@angular/core';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { ConsoleService } from './console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: [ './console.component.scss' ]
})
export class ConsoleComponent implements OnInit, OnDestroy {
  log: any[];

  constructor(private readonly console: ConsoleService) {
  }

  ngOnInit() {
    this.log = [];

    this.console.messages
      .pipe(untilDestroyed(this))
      .subscribe(msg => this.log.push(msg));
  }

  ngOnDestroy() {
  }
}
