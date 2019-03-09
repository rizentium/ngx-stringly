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
const text = 'The quick brown fox jumps over the lazy dog.';
const find = 'lazy';

this.result = NgxStringly.parsing(text, find, false);
```
Result will be
```json
{
  "prefix": "The quick brown fox jumps over the ",
  "content": "lazy",
  "suffix": " dog."
}
```
## Run Example
Clone the repository
```bash
git clone https://github.com/rizentium/ngx-stringly.git
```
Open `ngx-stringly` directory
```bash
cd ngx-stringly
```
Run server
```bash
ng serve
```
And navigate your browser to `http://localhost:4200`
