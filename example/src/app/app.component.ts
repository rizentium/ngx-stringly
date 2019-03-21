import { Component } from '@angular/core';
import { NgxStringly } from 'ngx-stringly/lib/ngx-stringly';
import { StringlyInterface } from 'ngx-stringly/lib/stringly-interface';

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
