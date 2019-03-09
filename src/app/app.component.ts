import { Component } from '@angular/core';
import { NgxStringlyService } from '../../projects/ngx-stringly/src/lib/ngx-stringly.service';
import {StringlyInterface} from '../../projects/ngx-stringly/src/interfaces/stringly-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-stringly example';
  text = 'The quick brown fox jumps over the lazy dog';
  find: string;
  result: StringlyInterface;

  constructor(public stringly: NgxStringlyService) {

  }

  onChanged() {
    this.result = this.stringly.parsing(this.text, this.find, false);
  }
}
