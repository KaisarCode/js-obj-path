# OBJPath
[js] Get property by path.h.

### Install
```
npm install kc-obj-path
```

### Use
```js
var objPath = require('kc-obj-path');
var obj = {
    foo: [
        {a:1, b:2},
        {a:3, b:4},
        {a:5, b:6}
    ]
};
var out = objPath(obj, 'foo[1].b');
console.log(out);
```
