import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import EnumSerializer from '../Serializer/EnumSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import Transform from '../OsgTypes/Transform';
import ReferenceFrameEnum from '../Enum/Transform_ReferenceFrame';
let objectWrapper = new ObjectWrapper('osg::Transform', [
    'osg::Object',
    'osg::Node',
    'osg::Group',
    'osg::Transform'
], Transform);
objectWrapper.addSerializer(new EnumSerializer('Mode', ReferenceFrameEnum, ReferenceFrameEnum.RELATIVE_RF));
ObjectWrapperManager.addWrapper(objectWrapper);