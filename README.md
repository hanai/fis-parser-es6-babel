# fis-parser-es6-babel

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]

A parser plugin for fis to turn ES6+ code into ES5 friendly code with babel.

## Usage

``` shell
$ npm install -g fis
$ npm install -g fis-parser-es6-babel
```

fis-conf.js

fis
``` js
fis.config.set('project.fileType.text', 'es6');
fis.config.set('modules.parser.es6', 'es6-babel');
fis.config.set('roadmap.ext.es6', 'js');
```

fis3
``` js
fis.set('project.fileType.text', 'es6');
fis.match('*.es6', {
    rExt: '.js',
    parser: fis.plugin('es6-babel', {})
});
```
## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/fis-parser-es6-babel.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fis-parser-es6-babel
[david-image]: http://img.shields.io/david/hanai/fis-parser-es6-babel.svg?style=flat-square
[david-url]: https://david-dm.org/hanai/fis-parser-es6-babel
[license-image]: http://img.shields.io/npm/l/fis-parser-es6-babel.svg?style=flat-square
[license-url]: ./LICENSE