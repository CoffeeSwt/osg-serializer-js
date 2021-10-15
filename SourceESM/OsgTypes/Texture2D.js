import Texture from './Texture';
class Texture2D extends Texture {
    constructor() {
        super();
        this.Image = null;
        this.TextureWidth = 0;
        this.TextureHeight = 0;
        this.Type = 'Osg::Texture';
    }
}
export default Texture2D;