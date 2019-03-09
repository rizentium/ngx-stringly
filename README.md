<p align='center'><b>ngx-stringly</b></p>
<p align='center'>Angular library for separating string into prefix, matched and suffix by search matching</p>
<h3 align='center'>

  [![Build Status](https://travis-ci.org/rizentium/ngx-stringly.svg?branch=master)](https://travis-ci.org/rizentium/ngx-stringly)
  ![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/rizentium/ngx-stringly.svg)
  ![GitHub](https://img.shields.io/github/license/rizentium/ngx-stringly.svg)
  
</h3>

## Installation
First, save `ngx-stringly` to your dependencies.
```bash
npm install ngx-stringly --save
```

## How it Works
Import `ngx-stringly` to your component.
```typescript
import { NgxStringly } from '@rizentium/ngx-stringly';
```
Use `NgxStringly` in your functions
```typescript
const text = 'The quick brown fox jumps over the lazy dog';
const find = 'lazy';

this.result = NgxStringly.parsing(text, find, false);
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
