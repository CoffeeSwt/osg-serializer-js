import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import ObjectCallbackSerializer from '../Serializer/ObjectCallbackSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import StateAttribute from '../OsgTypes/StateAttribute';
let objectWrapper = new ObjectWrapper('osg::StateAttribute', [
    'osg::Object',
    'osg::StateAttribute'
], StateAttribute);
objectWrapper.addSerializer(new ObjectCallbackSerializer('UpdateCallback'));
objectWrapper.addSerializer(new ObjectCallbackSerializer('EventCallback'));
ObjectWrapperManager.addWrapper(objectWrapper);