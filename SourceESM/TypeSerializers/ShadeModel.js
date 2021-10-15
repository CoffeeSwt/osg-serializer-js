import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import EnumSerializer from '../Serializer/EnumSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import ShadeModel from '../OsgTypes/ShadeModel';
import ShadeModel_Mode from '../Enum/ShadeModel_Mode';
let objectWrapper = new ObjectWrapper('osg::ShadeModel', [
    'osg::Object',
    'osg::StateAttribute',
    'osg::ShadeModel'
], ShadeModel);
objectWrapper.addSerializer(new EnumSerializer('Mode', ShadeModel_Mode, ShadeModel_Mode.SMOOTH));
ObjectWrapperManager.addWrapper(objectWrapper);