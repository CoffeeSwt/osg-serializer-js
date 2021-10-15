import StateAttribute from './StateAttribute';
import FaceMode from '../Enum/CullFace_FaceMode';
class CullFace extends StateAttribute {
    constructor() {
        super();
        this.Type = 'osg::CullFace';
        this.Mode = FaceMode.BACK;
    }
}
export default CullFace;