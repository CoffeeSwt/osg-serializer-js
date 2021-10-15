# osg-serializer-browser
基于`osg-serializier-js`改造，前后端通用的`osgb`、`osgt`文件解析模块，内置es6版本。

osg-serializier-js is PureJS module for serializing `.osgt` and `.osgb` files. 

**The tool is still in development** but I will be happy to your issues and contributions

UPDATE: Consider using `wasm` using OpenSceneGraph's most updated code ([osg-wasm](https://github.com/cubicool/osg-wasm), [openscenegraph-cross-platform-guide](https://github.com/OGStudio/openscenegraph-cross-platform-guide/tree/master/1.10.SampleWeb)).

##  installation and usage

In terminal: `npm install --save osg-serializer-browser`

In code(node.js):
```javascript
var filePath = './Samples/cessna.osgb'
osg.readFile(filePath, (err, osgObj) => {
    if (err) console.error(err);
    else console.log(osgObj);
    // start workin with 3d data
})

```

In code(browser):
```html
<script src='./dist/osg.js'></script>
```
```javascript

var buffer = require('buffer')
var filePath = './Samples/cessna.osgb'
fetch(filePath).then(res => { return res.arrayBuffer() }).then(abuf => {
    var buf = buffer.Buffer.from(abuf)
    var osgObj = osg.readBuffer(buf, filePath)
    console.log(osgObj);
})

// start workin with 3d data

```

欢迎关注微信公众号【三维网格3D】，了解`大规模Osgb倾斜摄影模型加载`原理介绍
![微信公众号【三维网格3D】](http://os.mesh-3d.com/articles/微信公众号【三维网格3D】.png)