import { Component } from '@angular/core';
import { Searcher } from 'ngx-stringly/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-stringly example';
  text = 'The quick brown fox jumps over the lazy dog';
  find: string;
  result: Searcher;

  constructor() {}

  onChanged() {
    this.result = Searcher.parse(this.text, this.find, false);
  }
}
