import Group from './Group';
class Transform extends Group {
    constructor() {
        super();
        this.Type = 'osg::Transform';
        this.ReferenceFrame = 0;
    }
}
export default Transform;