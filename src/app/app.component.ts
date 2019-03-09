import { Component } from '@angular/core';
import { NgxStringly } from '../../projects/ngx-stringly/src/lib/ngx-stringly';
import { StringlyInterface } from '../../projects/ngx-stringly/src/interfaces/stringly-interface';

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

  constructor() {}

  onChanged() {
    this.result = NgxStringly.parsing(this.text, this.find, false);
  }
}
