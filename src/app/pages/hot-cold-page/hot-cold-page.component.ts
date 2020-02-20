import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ConsoleService } from '../../ui/console/console.service';

@Component({
  selector: 'app-hot-cold-page',
  templateUrl: './hot-cold-page.component.html',
  styleUrls: [ './hot-cold-page.component.scss' ]
})
export class HotColdPageComponent implements OnInit {
  @ViewChild('subButton', { static: true }) subButton: ElementRef<HTMLButtonElement>;
  @ViewChild('unsubButton', { static: true }) unsubButton: ElementRef<HTMLButtonElement>;

  constructor(private readonly con: ConsoleService) {
  }

  ngOnInit() {
    fromEvent(this.subButton.nativeElement, 'click')
      .pipe(tap(() => this.con.log('Tap with subscribe')))
      .subscribe(() => this.con.log('Subscriber callback'));

    fromEvent(this.unsubButton.nativeElement, 'click')
      .pipe(tap(() => this.con.log('Tap without subscribe')));
  }
}
