import osg from './SourceESM'
import * as THREE from '@mesh-3d/three'
import MeBaseViewer from '@mesh-3d/core/Source/MeBaseViewer'

var viewer = new MeBaseViewer({
    container: document.body,
    autoRender: true
})

var filePath = './Samples/Tile_+000_+013.osgb'
fetch(filePath).then(res => { return res.arrayBuffer() }).then(abuf => {
    var osgObj = osg.readBuffer(abuf, filePath)
    console.log(`PagedLOD`)
    console.log(osgObj);
    osg.TraverseNodes(osgObj, node => {
        if (node.Type == 'osg::Geometry') {

            try {
                var geometry = parseGeometry(node)
                var material = parseMaterial(node.StateSet)
                var mesh = new THREE.Mesh(geometry, material);
                mesh.rotation.x=-Math.PI/2
                console.log(mesh);
                viewer.add(mesh)
                viewer.lookAt(mesh)
            } catch (err) {
                console.error(err);
            }

        }
    })
})


/**
 * 
 * @param {osg.OsgTypes.Geometry} osgGeometry 
 */
function parseGeometry(osgGeometry) {
    var bufferGeometry = new THREE.BufferGeometry();

    var positions = new Float32Array(osgGeometry.VertexArray.flat());
    var uvs = new Float32Array(osgGeometry.TexCoordArray[0].flat());
    bufferGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    bufferGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    var primitiveSet = osgGeometry.PrimitiveSetList[0]
    var indices = primitiveSet.data;
    if (primitiveSet.value == 4) {

        let newIndices = [];
        for (let i = 0; i < indices.length; i += 4) {
            let i0 = indices[i], i1 = indices[i + 1], i2 = indices[i + 2], i3 = indices[i + 3];
            newIndices.push(i0, i1, i3, i1, i2, i3);
        }
        indices = newIndices;

    }

    bufferGeometry.setIndex(indices);

    return bufferGeometry
}

function parseMaterial(osgStateSet) {
    var material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide
    });
    var osgImage = osgStateSet.TextureAttributeList[0].value.StateAttribute.Image
    var texture = parseImage(osgImage)
    if (texture) {
        material.map = texture
    }
    return material
}

function parseImage(osgImage) {

    var fileName = osgImage.Name;
    const isJPEG = fileName.search(/\.jpe?g($|\?)/i) > 0
    const isPNG = fileName.search(/\.png($|\?)/i) > 0
    if (!isPNG && !isJPEG) return;

    var mimeType = isPNG ? 'image/png' : 'image/jpeg';
    var imageUri = new Blob([osgImage.Data], { type: mimeType });
    imageUri = URL.createObjectURL(imageUri)

    var texture = new THREE.TextureLoader().load(imageUri, () => {
        texture.needsUpdate = true
    })
    return texture;
}