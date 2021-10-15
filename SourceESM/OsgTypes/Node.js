import ObjectClass from './Object';
class Node extends ObjectClass {
    constructor() {
        super();
        this.CullingActive = true;
        this.NodeMask = 4294967295;
        this.Descriptions = [];
        this.InitialBound = null;
        this.StateSet = null;
        this.Type = 'Osg::Node';
    }
}
export default Node;