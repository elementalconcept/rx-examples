import { Component, OnInit } from '@angular/core';

import { ConsoleService } from '../../ui/console/console.service';

@Component({
  selector: 'app-hot-cold-page',
  templateUrl: './hot-cold-page.component.html',
  styleUrls: [ './hot-cold-page.component.scss' ]
})
export class HotColdPageComponent implements OnInit {
  constructor(private readonly console: ConsoleService) {
  }

  ngOnInit() {
  }

  onClick = () => this.console.log('Button clicked');
}
