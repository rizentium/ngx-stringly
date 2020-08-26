<p align='center'><b>ngx-stringly</b></p>
<p align='center'>Angular library for separating string into prefix, matched and suffix by search matching</p>
<h3 align='center'>

[![Build Status](https://travis-ci.org/rizentium/ngx-stringly.svg?branch=master)](https://travis-ci.org/rizentium/ngx-stringly) [![Coverage Status](https://coveralls.io/repos/github/rizentium/ngx-stringly/badge.svg?branch=master)](https://coveralls.io/github/rizentium/ngx-stringly?branch=master)
![NPM tag (latest SemVer)](https://img.shields.io/npm/v/ngx-stringly.svg)
![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/rizentium/ngx-stringly.svg)
![GitHub](https://img.shields.io/github/license/rizentium/ngx-stringly.svg)

</h3>

## Installation

First, save `ngx-stringly` to your dependencies.

```bash
npm install ngx-stringly --save
```

## Usage

Import `ngx-stringly` to your component.

```typescript
import { Searcher } from 'ngx-stringly/ngx';
```

Use `Index` in your functions

```typescript
const text = 'The quick brown fox jumps over the lazy dog.';
const find = 'lazy';

this.result = Searcher.parse(text, find, false);
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

This example is using angular 7.

Clone the repository

```bash
git clone https://github.com/rizentium/ngx-stringly.git
```

Open `example` directory

```bash
cd example
```

Install packages

```bash
npm install
```

Run server

```bash
ng serve
```

And navigate your browser to `http://localhost:4200`
