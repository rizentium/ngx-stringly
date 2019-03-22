/**
 * Public API Surface of ngx-stringly
 *
 * @license
 * Copyright rizentium. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/rizentium/ngx-stringly/blob/master/LICENSE
 */
export interface InterfaceSearcher {
  prefix: string;
  content: string;
  suffix: string;
}
/**
 * Perform string formatting
 *
 * `Searcher` handle all of string search.
 */
export default class Searcher {
  /**
   * Sending `text` and `find` variable and return `InterfaceSearcher`.
   *
   * @param text - Input string for parsing
   * @param find - Query key for parsing
   * @param identical - Parsing type
   *
   * @return StringlyInterface
   */
  public static parse(text: string, find: string, identical: boolean = false): InterfaceSearcher {
    const result = {} as InterfaceSearcher;
    for (let x = 0; x < text.length + 1 - find.length; x++) {
      if (identical) {
        if (text.substr(x, find.length) === find) {
          result.prefix = text.substr(0, x);
          result.content = text.substr(x, find.length);
          result.suffix = text.substr(x + find.length, text.length);
        }
      } else {
        if (text.substr(x, find.length).toUpperCase() === find.toUpperCase()) {
          result.prefix = text.substr(0, x);
          result.content = text.substr(x, find.length);
          result.suffix = text.substr(x + find.length, text.length);
        }
      }
    }
    return result;
  }
}
