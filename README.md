# fis-parser-es6-babel

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
