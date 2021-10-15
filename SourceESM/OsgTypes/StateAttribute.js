import ObjectClass from './Object';
class StateAttribute extends ObjectClass {
    constructor() {
        super();
        this.Type = 'Osg::StateAttribute';
    }
    getMember() {
        return 0;
    }
    getTypeMemberPair() {
        return {
            type: this.Type,
            member: this.getMember()
        };
    }
}
export default StateAttribute;