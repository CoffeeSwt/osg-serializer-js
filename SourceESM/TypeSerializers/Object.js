import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
import EnumSerializer from '../Serializer/EnumSerializer';
import ObjectSerializer from '../Serializer/ObjectSerializer';
import UserSerializer from '../Serializer/UserSerializer';
import PropByValSerializer from '../Serializer/PropByValSerializer';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import ObjectClass from '../OsgTypes/Object';
import ObjectDataVariance from '../Enum/ObjectData_Variance';
let objectWrapper = new ObjectWrapper('osg::Object', ['osg::Object'], ObjectClass);
function UserDataReader() {
    // TODO
    throw 'UserDataReader not yet supported';
}
objectWrapper.addSerializer(new PropByValSerializer('String', 'Name', ''));
objectWrapper.addSerializer(new EnumSerializer('DataVariance', ObjectDataVariance, ObjectDataVariance.UNSPECIFIED));
objectWrapper.addSerializer(new UserSerializer('UserData', UserDataReader, { maxVersion: 76 }));
objectWrapper.addSerializer(new ObjectSerializer('UserDataContainer', null, { minVersion: 77 }));
ObjectWrapperManager.addWrapper(objectWrapper);