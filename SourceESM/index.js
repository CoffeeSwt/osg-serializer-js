import Log from './Common/Log';
import TraverseNodes from './Common/traverseNodes';
import {
    readBuffer,
    readFile
} from './Input/ReadFile';
import BufferData from './OsgTypes/BufferData';
import CullFace from './OsgTypes/CullFace';
import DefaultUserDataContainer from './OsgTypes/DefaultUserDataContainer';
import Drawable from './OsgTypes/Drawable';
import Geode from './OsgTypes/Geode';
import Geometry from './OsgTypes/Geometry';
import Group from './OsgTypes/Group';
import Image from './OsgTypes/Image';
import LOD from './OsgTypes/LOD';
import Material from './OsgTypes/Material';
import MatrixTransform from './OsgTypes/MatrixTransform';
import Node from './OsgTypes/Node';
import Object from './OsgTypes/Object';
import OsgArray from './OsgTypes/OsgArray';
import PagedLOD from './OsgTypes/PagedLOD';
import ShadeModel from './OsgTypes/ShadeModel';
import StateAttribute from './OsgTypes/StateAttribute';
import StateSet from './OsgTypes/StateSet';
import Texture2D from './OsgTypes/Texture2D';
import Texture from './OsgTypes/Texture';
import Transform from './OsgTypes/Transform';
import UserDataContainer from './OsgTypes/UserDataContainer';
export default {
    Log,
    TraverseNodes,
    readBuffer,
    readFile,
    OsgTypes: {
        BufferData,
        CullFace,
        DefaultUserDataContainer,
        Drawable,
        Geode,
        Geometry,
        Group,
        Image,
        LOD,
        Material,
        MatrixTransform,
        Node,
        Object,
        OsgArray,
        PagedLOD,
        ShadeModel,
        StateAttribute,
        StateSet,
        Texture2D,
        Texture,
        Transform,
        UserDataContainer
    }
};    /*module.exports.readFile('./Samples/grass1.osgb',function (err, data) {
    console.log(err,data)
});*/