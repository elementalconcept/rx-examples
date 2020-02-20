import { Component, OnDestroy, OnInit } from '@angular/core';

import { ConsoleService } from '../../ui/console/console.service';
import { Observable, Subject } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-operator-page',
  templateUrl: './operator-page.component.html',
  styleUrls: [ './operator-page.component.scss' ]
})
export class OperatorPageComponent implements OnInit, OnDestroy {
  private readonly data$ = new Subject<RandomData>();

  constructor(private readonly con: ConsoleService) {
  }

  ngOnInit() {
    // Original code
    this.data$
      .pipe(
        untilDestroyed(this),
        pluck('numberAsString'),
        map((v: any) => parseFloat(v)));

    // Refactored with a custom operator
    this.data$
      .pipe(
        untilDestroyed(this),
        getNumber('numberAsString'))
      .subscribe(num => this.con.log(`Got number ${num}`));
  }

  ngOnDestroy() {
  }

  onClick = () => this.data$.next({ numberAsString: Math.round(Math.random() * 100).toString() });
}

export function getNumber(fieldName: string) {
  return <T>(source: Observable<T>) => source
    .pipe(
      pluck(fieldName),
      map((v: any) => parseFloat(v)));
}

export interface RandomData {
  numberAsString: string;
}
