/**
 * Public API Surface of ngx-stringly
 *
 * @license
 * Copyright rizentium. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/rizentium/ngx-stringly/blob/master/LICENSE
 */
interface ISearcher {
  prefix: string;
  content: string;
  suffix: string;
}
/**
 * Perform string formatting
 *
 * `Searcher` handle all of string search.
 */
class Searcher {
  /**
   * Sending `text` and `find` variable and return `InterfaceSearcher`.
   *
   * @param text - Input string for parsing
   * @param find - Query key for parsing
   * @param identical - Parsing type
   *
   * @return StringlyInterface
   */
  public static parse(text: string, find: string, identical: boolean = false, trim: boolean = false): ISearcher {
    const result = {} as ISearcher;
    for (let x = 0; x < text.length + 1 - find.length; x++) {
      if (identical) {
        if (text.substr(x, find.length) === find) {
          result.prefix = trim ? text.substr(0, x).trim() : text.substr(0, x);
          result.content = trim ? text.substr(x, find.length).trim() : text.substr(x, find.length);
          result.suffix = trim ? text.substr(x + find.length, text.length).trim() : text.substr(x + find.length, text.length);
        }
      } else {
        if (text.substr(x, find.length).toUpperCase() === find.toUpperCase()) {
          result.prefix = trim ? text.substr(0, x).trim() : text.substr(0, x);
          result.content = trim ? text.substr(x, find.length).trim() : text.substr(x, find.length);
          result.suffix = trim ? text.substr(x + find.length, text.length).trim() : text.substr(x + find.length, text.length);
        }
      }
    }
    return result;
  }
}
export { Searcher, ISearcher };
