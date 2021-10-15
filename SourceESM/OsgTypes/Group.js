import Node from './Node';
class Group extends Node {
    constructor() {
        super();
        /** 
         * @type {Array<Node>}
         */
        this.Children = [];
        this.Type = 'Osg::Group';
    }
}
export default Group;