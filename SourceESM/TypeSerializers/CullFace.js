import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import EnumSerializer from '../Serializer/EnumSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import CullFace from '../OsgTypes/CullFace';
import FaceMode from '../Enum/CullFace_FaceMode';
let objectWrapper = new ObjectWrapper('osg::CullFace', [
    'osg::Object',
    'osg::StateAttribute',
    'osg::CullFace'
], CullFace);
objectWrapper.addSerializer(new EnumSerializer('Mode', FaceMode, FaceMode.BACK));
ObjectWrapperManager.addWrapper(objectWrapper);