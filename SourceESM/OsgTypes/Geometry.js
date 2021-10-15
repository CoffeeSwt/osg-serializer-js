import Drawable from './Drawable';
class Geometry extends Drawable {
    constructor() {
        super();
        this.Type = 'osg::Geometry';
        this.InitialBound = null;
        this.BoundingBox = null;
        this.PrimitiveSetList = [];
        this.TexCoordArray = [];
        this.VertexAttribArray = [];
        this.VertexArray = null;
    }
}
export default Geometry;