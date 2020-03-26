import { Injectable } from '@angular/core';

import { timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TimerService {
  readonly timer$ = timer(1000, 1000);
}
