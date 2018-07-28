# es6compiler

A basic repo to compile and minify es6 into JavaScript.

## Starting

Copy your _es6_ code into _src/index.js_ and run one of the following commands. They will compile into new files in _lib/_. Thanks to _gulp-concat_ this project is able to merge multiple files into one.

## Available commands

```bash
# Commands
$ yarn compile-minify
$ yarn compile
$ yarn minify
```

> _compile-minify_: Parses es6 code into Javascript code and minifies it.
> _compile-minify_: Parses es6 code into Javascript code.
> _minify_: Just minifies your code.

```javascript
// Source code
const example = () => {
  let gulp = "es6compiler";
  console.log(`${gulp} is awesome`);
};

// Compiled es6 into JS
("use strict");

var example = function example() {
  var gulp = "es6compiler";
  console.log(gulp + " is awesome");
};

// Minified code
"use strict";var example=function(){console.log("es6compiler is awesome")};
```

## Configure

Just edit _gulpfile.js_ to match your directories or filenames.

## License

es6compiler is licensed under the MIT License, Version 2.0. See [LICENSE](LICENSE) for the full license text.
