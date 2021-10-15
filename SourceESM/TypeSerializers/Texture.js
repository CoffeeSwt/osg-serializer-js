import UserSerializer from '../Serializer/UserSerializer';
import PropByValSerializer from '../Serializer/PropByValSerializer';
import EnumSerializer from '../Serializer/EnumSerializer';
import Texture from '../OsgTypes/Texture';
import InternalFormatModeEnum from '../Enum/Texture_InternalFormatMode';
import ShadowCompareFuncEnum from '../Enum/Texture_ShadowCompareFunc';
import ShadowTextureModeEnum from '../Enum/Texture_ShadowTextureMode';
import { ObjectGLEnum } from '../Common/DataTypes';
import ObjectWrapper from '../Serializer/ObjectWrapper';
import ObjectWrapperManager from '../Serializer/ObjectWrapperManager';
let objectWrapper = new ObjectWrapper('osg::Texture', [
    'osg::Object',
    'osg::StateAttribute',
    'osg::Texture'
], Texture);
const swizzleDictionary = {
    'R': 6403,
    'G': 6404,
    'B': 6405,
    'A': 6406,
    '0': 0,
    '1': 1
};
function readInternalFormat(inputStream, texture) {
    let mode = new ObjectGLEnum();
    inputStream.inputOperator.readGLEnum(mode);
    if (texture.getProperty('InternalFormatMode') === InternalFormatModeEnum.USE_USER_DEFINED_FORMAT) {
        texture.setInternalFormat(mode.value);
    }
}
function readGLEnum(property) {
    return function (inputStream, texture) {
        let mode = new ObjectGLEnum();
        inputStream.inputOperator.readGLEnum(mode);
        texture.setProperty(property, mode);
    };
}
function readSwizzle(inputStream, texture) {
    let swizzleString = inputStream.inputOperator.readString();
    let swizzle = [];
    for (let i = 0; i < 4; i++)
        swizzle.push(swizzleDictionary[swizzleString.charAt(i)]);
    texture.setProperty('Swizzle', swizzle);
}
function readImageAttachment(inputStream) {
    inputStream.inputOperator.readUInt();
    inputStream.inputOperator.readInt();
    inputStream.inputOperator.readBool();
    inputStream.inputOperator.readInt();
    inputStream.inputOperator.readInt();
    inputStream.inputOperator.readInt();
}
// todo add all properties to Texture class
objectWrapper.addSerializer(new UserSerializer('WRAP_S', readGLEnum('WrapS')));
objectWrapper.addSerializer(new UserSerializer('WRAP_T', readGLEnum('WrapT')));
objectWrapper.addSerializer(new UserSerializer('WRAP_R', readGLEnum('WrapR')));
objectWrapper.addSerializer(new UserSerializer('MIN_FILTER', readGLEnum('MinFilter')));
objectWrapper.addSerializer(new UserSerializer('MAG_FILTER', readGLEnum('MinFilter')));
objectWrapper.addSerializer(new PropByValSerializer('Float', 'MaxAnisotropy', 1));
objectWrapper.addSerializer(new PropByValSerializer('Bool', 'UseHardwareMipMapGeneration', true));
objectWrapper.addSerializer(new PropByValSerializer('Bool', 'UnRefImageDataAfterApply', false));
objectWrapper.addSerializer(new PropByValSerializer('Bool', 'ClientStorageHint', false));
objectWrapper.addSerializer(new PropByValSerializer('Bool', 'ResizeNonPowerOfTwoHint', true));
objectWrapper.addSerializer(new PropByValSerializer('Vec4d', 'BorderColor', [
    0,
    0,
    0,
    0
]));
objectWrapper.addSerializer(new PropByValSerializer('GLInt', 'BorderWidth', 0));
objectWrapper.addSerializer(new EnumSerializer('InternalFormatMode', InternalFormatModeEnum, InternalFormatModeEnum.USE_IMAGE_DATA_FORMAT));
objectWrapper.addSerializer(new UserSerializer('InternalFormat', readInternalFormat));
objectWrapper.addSerializer(new UserSerializer('SourceFormat', readGLEnum('SourceFormat')));
objectWrapper.addSerializer(new UserSerializer('SourceType', readGLEnum('SourceType')));
objectWrapper.addSerializer(new PropByValSerializer('Bool', 'ShadowComparison', false));
objectWrapper.addSerializer(new EnumSerializer('ShadowCompareFunc', ShadowCompareFuncEnum, ShadowCompareFuncEnum.LEQUAL));
objectWrapper.addSerializer(new EnumSerializer('ShadowTextureMode', ShadowTextureModeEnum, ShadowTextureModeEnum.LUMINANCE));
objectWrapper.addSerializer(new PropByValSerializer('Float', 'ShadowAmbient', 0));
// From version 95. removed in version 153
objectWrapper.addSerializer(new UserSerializer('ImageAttachment', readImageAttachment, {
    minVersion: 95,
    maxVersion: 152
}));
// From version 98
objectWrapper.addSerializer(new UserSerializer('Swizzle', readSwizzle, { minVersion: 98 }));
// From version 155
objectWrapper.addSerializer(new PropByValSerializer('Float', 'MinLOD', 0, { minVersion: 155 }));
objectWrapper.addSerializer(new PropByValSerializer('Float', 'MaxLOD', -1, { minVersion: 155 }));
objectWrapper.addSerializer(new PropByValSerializer('Float', 'LODBias', 0, { minVersion: 155 }));
ObjectWrapperManager.addWrapper(objectWrapper);