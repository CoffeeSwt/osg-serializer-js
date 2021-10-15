const osg = require('./Source')
var filePath = './Samples/cessna.osgb'
osg.readFile(filePath, (err, osgObj) => {
    if (err) console.error(err);
    else console.log(osgObj);
})