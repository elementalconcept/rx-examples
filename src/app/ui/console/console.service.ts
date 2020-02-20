import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConsoleService {
  private readonly messages$ = new Subject<any>();
  private readonly clear$ = new Subject<void>();

  log = (message: any) => this.messages$.next(message);

  clear = () => this.clear$.next();

  get messages() {
    return this.messages$;
  }

  get clearEvent() {
    return this.clear$;
  }
}
