import BaseSerializer from './BaseSerializer';
class ObjectCallbackSerializer extends BaseSerializer {
    constructor(name, options) {
        super(name, options);
    }
    read(inputStream, object) {
        let hasObject = false;
        if (inputStream.isBinary()) {
            hasObject = inputStream.inputOperator.readBool();
        } else if (inputStream.inputOperator.matchString(this.getName())) {
            hasObject = inputStream.inputOperator.readBool();
        }
        if (hasObject) {
            throw 'callback object serializing is NOT SUPPORTED - property: ' + this.getName();
        }
    }
}
export default ObjectCallbackSerializer;