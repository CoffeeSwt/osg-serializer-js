import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import PropByValSerializer from '../Serializer/PropByValSerializer';
import ImageSerializer from '../Serializer/ImageSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import Texture2D from '../OsgTypes/Texture2D';
let objectWrapper = new ObjectWrapper('osg::Texture2D', [
    'osg::Object',
    'osg::StateAttribute',
    'osg::Texture',
    'osg::Texture2D'
], Texture2D);
objectWrapper.addSerializer(new ImageSerializer('Image', null));
objectWrapper.addSerializer(new PropByValSerializer('Int', 'TextureWidth', 0));
objectWrapper.addSerializer(new PropByValSerializer('Int', 'TextureHeight', 0));
ObjectWrapperManager.addWrapper(objectWrapper);