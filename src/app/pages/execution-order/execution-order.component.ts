import { Component } from '@angular/core';

import { timer } from 'rxjs';

import { ConsoleService } from '../../ui/console/console.service';

@Component({
  selector: 'app-execution-order',
  templateUrl: './execution-order.component.html',
  styleUrls: [ './execution-order.component.scss' ]
})
export class ExecutionOrderComponent {
  constructor(private readonly con: ConsoleService) {
  }

  doStuff = () => {
    let value = 1;

    timer(2000).subscribe(() => value = 255);

    this.con.log(`Value: ${ value }`);
  };
}
