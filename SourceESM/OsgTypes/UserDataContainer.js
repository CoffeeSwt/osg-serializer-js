import ObjectClass from './Object';
class UserDataContainer extends ObjectClass {
    constructor() {
        super();
        this.DescriptionList = [];
        this.ObjectList = [];
        this.UserData = null;
        this.Type = 'Osg::UserDataContainer';
    }
}
export default UserDataContainer;