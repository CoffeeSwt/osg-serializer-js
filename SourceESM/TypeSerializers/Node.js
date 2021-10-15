import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import ObjectCallbackSerializer from '../Serializer/ObjectCallbackSerializer';
import ObjectSerializer from '../Serializer/ObjectSerializer';
import UserSerializer from '../Serializer/UserSerializer';
import PropByValSerializer from '../Serializer/PropByValSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import Node from '../OsgTypes/Node';
let objectWrapper = new ObjectWrapper('osg::Node', [
    'osg::Object',
    'osg::Node'
], Node);
function readInitialBound(inputStream, node) {
    // todo check if readVectorOfType is right
    let center, radius;
    inputStream.readBeginBracket();
    inputStream.readProperty('Center');
    center = inputStream.readVectorOfType(3, 'Double');
    inputStream.readProperty('Radius');
    radius = inputStream.inputOperator.readDouble();
    inputStream.readEndBracket();
    node.InitialBound = {
        center: center,
        radius: radius
    };
}
function readDescriptions(inputStream, node) {
    let size = inputStream.inputOperator.readUInt();
    for (let i = 0; i < size; ++i) {
        let value = inputStream.inputOperator.readWrappedString();
        node.descriptions.push(value);
    }
    inputStream.readEndBracket();
}
objectWrapper.addSerializer(new UserSerializer('InitialBound', readInitialBound));
objectWrapper.addSerializer(new ObjectCallbackSerializer('ComputeBoundingSphereCallback'));
objectWrapper.addSerializer(new ObjectCallbackSerializer('UpdateCallback'));
objectWrapper.addSerializer(new ObjectCallbackSerializer('EventCallback'));
objectWrapper.addSerializer(new ObjectCallbackSerializer('CullCallback'));
objectWrapper.addSerializer(new PropByValSerializer('Bool', 'CullingActive', true));
objectWrapper.addSerializer(new PropByValSerializer('HEXINT', 'NodeMask', 4294967295));
objectWrapper.addSerializer(new UserSerializer('Descriptions', readDescriptions, { maxVersion: 76 }));
objectWrapper.addSerializer(new ObjectSerializer('StateSet', null));
ObjectWrapperManager.addWrapper(objectWrapper);