import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConsoleService {
  private readonly messages$ = new Subject<any>();

  log = (message: any) => this.messages$.next(message);

  get messages() {
    return this.messages$;
  }
}
