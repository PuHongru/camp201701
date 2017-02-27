在GitHub上找了jQuery和underscore的源码来看他们的代码风格。

**jquery：**

- jQuery使用制表符缩进。

- ()中，括号和括号中的具体内容之间有空格。

- 使用双引号。

- 有分号。

- 函数名和()之间没有空格，函数名后的()与{}之间有空格。

- keywords 后面有空格，且与{}之间也有空格,比如 if ( nType === 3 || nType === 8 || nType === 2 ) {}。

- if/else/for/while/try语句后一定会有{}，不会省略，且总是多行。

- jquery中，()中的数组，(和[在一行，[ 会和数组中的内容对齐，会这样写：

```
define( [
        "../core",
        "../core/access",
        "./support",
        "../var/rnothtmlwhite",
        "../selector"
], function( jQuery, access, support, rnothtmlwhite ) {
```

- 使用一个var声明多个变量时，每个变量占一行，从第二个开始的缩进1个制表符。

**underscore：**

- underscore使用两个空格来缩进。

- ()中，括号和括号中的具体内容之间没有空格。

- 使用单引号。

- 有分号。

- 函数名和()之间没有空格，函数名后的()与{}之间有空格。

- keywords 后面有空格，且与{}之间也有空格,比如 if (typeof exports !== 'undefined') {}。

- if语句后，有的时候会省略大括号{},且有可能写在一行。

- underscore中,()中有数组时，[ 换行，且缩进两个空格，数组中的内容换行，缩进4个空格。如下：

```
iDoc.write(
  [
    '<script>',
    'parent.iElement = document.createElement("div");',
    'parent.iArguments = (function(){ return arguments; })(1, 2, 3);',
    'parent.iArray = [1, 2, 3];',
    'parent.iString = new String("hello");',
    'parent.iNumber = new Number(100);',
    'parent.iFunction = (function(){});',
    'parent.iDate = new Date();',
    'parent.iRegExp = /hi/;',
    'parent.iNaN = NaN;',
    'parent.iNull = null;',
    'parent.iBoolean = new Boolean(false);',
    'parent.iUndefined = undefined;',
    'parent.iObject = {};',
    'parent.iError = new Error();',
    '</script>'
  ].join('\n')
);
```

- 使用一个var声明多个变量时，若长度比较短时，写在一行；写成多行时，后面的变量与第一个变量对齐。