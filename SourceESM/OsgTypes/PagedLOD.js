import LOD from './LOD';
class PagedLOD extends LOD {
    constructor() {
        super();
        this.DatabasePath = null;
        this.FrameNumberOfLastTraversal = 0;
        this.NumChildrenThatCannotBeExpired = 0;
        this.DisableExternalChildrenPaging = false;
        this.PriorityOffsets = null;
        this.PriorityScales = null;
        this.FileNames = null;
        this.Type = 'Osg::Group';
    }
}
export default PagedLOD;