import ObjectClass from './Object';
import RenderingHint from '../Enum/StateSet_RenderingHint';
import RenderBinMode from '../Enum/StateSet_RenderBinMode';
class StateSet extends ObjectClass {
    constructor() {
        super();
        this.ModeList = [];
        this.AttributeList = [];
        this.TextureModeList = [];
        this.TextureAttributeList = [];
        this.UniformList = [];
        this.RenderingHint = RenderingHint.DEFAULT_BIN;
        this.RenderBinMode = RenderBinMode.INHERIT_RENDERBIN_DETAILS;
        this.BinNumber = 0;
        this.BinName = '';
        this.NestRenderBins = true;
        this.DefineList = {};
        this.Type = 'Osg::StateSet';
    }
}
export default StateSet;