��GitHub������jQuery��underscore��Դ���������ǵĴ�����

**jquery��**

- jQueryʹ���Ʊ��������

- ()�У����ź������еľ�������֮���пո�

- ʹ��˫���š�

- �зֺš�

- ��������()֮��û�пո񣬺��������()��{}֮���пո�

- keywords �����пո�����{}֮��Ҳ�пո�,���� if ( nType === 3 || nType === 8 || nType === 2 ) {}��

- if/else/for/while/try����һ������{}������ʡ�ԣ������Ƕ��С�

- jquery�У�()�е����飬(��[��һ�У�[ ��������е����ݶ��룬������д��

```
define( [
        "../core",
        "../core/access",
        "./support",
        "../var/rnothtmlwhite",
        "../selector"
], function( jQuery, access, support, rnothtmlwhite ) {
```

- ʹ��һ��var�����������ʱ��ÿ������ռһ�У��ӵڶ�����ʼ������1���Ʊ����

**underscore��**

- underscoreʹ�������ո���������

- ()�У����ź������еľ�������֮��û�пո�

- ʹ�õ����š�

- �зֺš�

- ��������()֮��û�пո񣬺��������()��{}֮���пո�

- keywords �����пո�����{}֮��Ҳ�пո�,���� if (typeof exports !== 'undefined') {}��

- if�����е�ʱ���ʡ�Դ�����{},���п���д��һ�С�

- underscore��,()��������ʱ��[ ���У������������ո������е����ݻ��У�����4���ո����£�

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

- ʹ��һ��var�����������ʱ�������ȱȽ϶�ʱ��д��һ�У�д�ɶ���ʱ������ı������һ���������롣