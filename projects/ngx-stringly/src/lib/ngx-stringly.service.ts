import { Injectable } from '@angular/core';
import {StringlyInterface} from '../interfaces/stringly-interface';

@Injectable({
  providedIn: 'root'
})
export class NgxStringlyService {

  constructor() { }

  public parsing(text: string, find: string, identical: boolean = false): StringlyInterface {
    const result: StringlyInterface = {
      prefix: '',
      content: '',
      suffix: ''
    };

    for (let x = 0; x < text.length + 1 - find.length; x++) {
      if (identical) {
        if (text.substr(x, find.length) === find) {
          result.prefix = text.substr(0, x);
          result.content = text.substr(x, find.length);
          result.suffix = text.substr((x + find.length), text.length);
        }
      } else {
        if (text.substr(x, find.length).toUpperCase() === find.toUpperCase()) {
          result.prefix = text.substr(0, x);
          result.content = text.substr(x, find.length);
          result.suffix = text.substr((x + find.length), text.length);
        }
      }
    }

    return result;
  }
}
