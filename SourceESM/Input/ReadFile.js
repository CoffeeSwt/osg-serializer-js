import InputStream from './InputStream';
import * as DataTypes from '../Common/DataTypes';
import BinaryStreamOperator from './BinaryStreamOperator';
import AsciiStreamOperator from './AsciiStreamOperator';
import Log from '../Common/Log';
import * as bufferLib from 'buffer';
let PROPERTY = new DataTypes.ObjectProperty();
const OSG_HEADER_LOW = 1821445793;
const OSG_HEADER_HIGH = 452674885;
const OSGT_HEADER = '#Ascii';
const WriteType = {
    WRITE_UNKNOWN: 0,
    WRITE_SCENE: 1,
    WRITE_IMAGE: 2,
    WRITE_OBJECT: 3
};
/**
 *
 * @param {buffer} buffer
 * @return {object} the serialized node
 */
function readBuffer(buffer, path) {
    if (buffer instanceof ArrayBuffer) {
        buffer = (typeof Buffer !== 'undefined' ? Buffer : bufferLib.Buffer).from(buffer)
    }
    const low = buffer.readUInt32LE(0);
    const high = buffer.readUInt32LE(4);
    let reader, type, version, openscenegraph_soversion, hasDomainVersion;
    if (low === OSG_HEADER_LOW && high === OSG_HEADER_HIGH) {
        reader = new BinaryStreamOperator(buffer, 8);
        let useCompressSource, useRobustBinaryFormat;
        type = reader.readUInt();
        // buf.readUInt32LE(ReadPosition);
        openscenegraph_soversion = reader.readUInt();
        let attributes = reader.readUInt();
        hasDomainVersion = (attributes & 1) !== 0;
        useCompressSource = (attributes & 2) !== 0;
        useRobustBinaryFormat = (attributes & 4) !== 0;
        reader.supportBinaryBrackets = useRobustBinaryFormat;
        let next = reader.readString();
        if (next !== '0') {
            throw 'compresses data not supported';
        }
    } else if (buffer.length >= OSGT_HEADER.length && buffer.toString('ASCII', 0, OSGT_HEADER.length) === OSGT_HEADER) {
        Log('OSGT File');
        reader = new AsciiStreamOperator(buffer, OSGT_HEADER.length);
        type = reader.readString();
        reader.goToNextRow();
        type = WriteType['WRITE_' + type.toUpperCase()] || 0;
        reader.readObjectProperty(PROPERTY.set('#Version'));
        openscenegraph_soversion = reader.readUInt();
        reader.goToNextRow();
        reader.readObjectProperty(PROPERTY.set('#Generator'));
        reader.readString();
        // Generator Name
        reader.goToNextRow();
        hasDomainVersion = reader.lookForward() === '#CustomDomain';
    } else {
        Log.ERROR('osg format not supported');
        return;
    }
    if (hasDomainVersion) {
        // TODO
        Log.ERROR('osg DomainVersion not supported');
        return;
    }
    reader.version = openscenegraph_soversion;
    let inputStream = new InputStream(path, reader);
    let startTime = new Date().getTime();
    let obj = inputStream.readObject();
    Log('timeElapsed:', new Date().getTime() - startTime);
    return obj;
}
/**
 *
 * @param {string} path
 * @param {function} cb callback function
 */
function readFile(path, cb) {
    const fs = require('fs');
    if (!cb) {
        throw 'Call back required';
    }
    fs.readFile(path, function (err, data) {
        if (err)
            cb(err);
        let node;
        try {
            node = readBuffer(data, path);
        } catch (e) {
            return cb(e);
        }
        if (!node) {
            return cb('Failed to convert file');
        }
        cb(null, node);
    });
}
export {
    readBuffer,
    readFile
};