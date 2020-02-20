import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { ConsoleService } from '../../ui/console/console.service';

@Component({
  selector: 'app-immutable-page',
  templateUrl: './immutable-page.component.html',
  styleUrls: [ './immutable-page.component.scss' ]
})
export class ImmutablePageComponent implements OnInit, OnDestroy {
  private readonly sourceOne$ = new Subject<string>();
  private readonly sourceTwo$ = new Subject<string>();

  private readonly replaySourceTwo$ = this.sourceTwo$
    .pipe(
      tap(() => this.con.log('sourceTwo$')),
      map(str => `(${str})`),
      shareReplay(1));

  constructor(private readonly con: ConsoleService) {
  }

  ngOnInit() {
    this.getSourceOne().subscribe(str => this.con.log(`Sub #1: ${str}`));
    this.getSourceOne().subscribe(str => this.con.log(`Sub #2: ${str}`));
    this.getSourceOne().subscribe(str => this.con.log(`Sub #3: ${str}`));

    this.getSourceTwo().subscribe(str => this.con.log(`Sub #X: ${str}`));
    this.getSourceTwo().subscribe(str => this.con.log(`Sub #Y: ${str}`));
    this.getSourceTwo().subscribe(str => this.con.log(`Sub #Z: ${str}`));
  }

  ngOnDestroy() {
  }

  getSourceOne = () => this.sourceOne$
    .pipe(
      tap(() => this.con.log('sourceOne$')),
      map(str => `[${str}]`),
      shareReplay(1));

  getSourceTwo = () => this.replaySourceTwo$;

  onSourceOne = () => this.sourceOne$.next(Math.round(Math.random() * 100).toString());

  onSourceTwo = () => this.sourceTwo$.next(Math.round(Math.random() * 100).toString());

  onClear = () => this.con.clear();
}
