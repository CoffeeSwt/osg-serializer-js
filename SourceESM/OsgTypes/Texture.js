import StateAttribute from './StateAttribute';
import GLEnum from '../Enum/GLEnum';
import InternalFormatMode from '../Enum/Texture_InternalFormatMode';
import ShadowCompareFuncEnum from '../Enum/Texture_ShadowCompareFunc';
import ShadowTextureModeEnum from '../Enum/Texture_ShadowTextureMode';
class Texture extends StateAttribute {
    constructor() {
        super();
        this.InternalFormatMode = 0;
        this.InternalFormat = 0;
        this.WrapS = GLEnum.CLAMP_TO_EDGE;
        this.WrapT = GLEnum.CLAMP_TO_EDGE;
        this.WrapR = GLEnum.CLAMP_TO_EDGE;
        this.MinFilter = GLEnum.LINEAR_MIPMAP_LINEAR;
        this.MagFilter = GLEnum.LINEAR;
        this.MaxAnisotropy = 1;
        this.UseHardwareMipMapGeneration = true;
        this.UnRefImageDataAfterApply = false;
        this.ClientStorageHint = false;
        this.ResizeNonPowerOfTwoHint = true;
        this.BorderColor = [
            0,
            0,
            0,
            0
        ];
        this.BorderWidth = 1;
        this.ShadowComparison = false;
        this.ShadowCompareFunc = ShadowCompareFuncEnum.LEQUAL;
        this.ShadowTextureMode = ShadowTextureModeEnum.LUMINANCE;
        this.ShadowAmbient = 0;
        this.Type = 'Osg::Texture';
    }
    computeInternalFormatType() {
    }
    setInternalFormat(internalFormat) {
        this.InternalFormatMode = InternalFormatMode.USE_USER_DEFINED_FORMAT;
        this.InternalFormat = internalFormat;
        computeInternalFormatType();
    }
}
export default Texture;