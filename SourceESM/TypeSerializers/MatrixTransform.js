import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import MatrixSerializer from '../Serializer/MatrixSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import MatrixTransform from '../OsgTypes/MatrixTransform';
let objectWrapper = new ObjectWrapper('osg::MatrixTransform', [
    'osg::Object',
    'osg::Node',
    'osg::Group',
    'osg::Transform',
    'osg::MatrixTransform'
], MatrixTransform);
objectWrapper.addSerializer(new MatrixSerializer('Mode'));
ObjectWrapperManager.addWrapper(objectWrapper);