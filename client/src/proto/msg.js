/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const domain = $root.domain = (() => {

    /**
     * Namespace domain.
     * @exports domain
     * @namespace
     */
    const domain = {};

    domain.AlbumParams = (function() {

        /**
         * Properties of an AlbumParams.
         * @memberof domain
         * @interface IAlbumParams
         * @property {string|null} [taskId] AlbumParams taskId
         * @property {number|null} [page] AlbumParams page
         * @property {number|null} [size] AlbumParams size
         */

        /**
         * Constructs a new AlbumParams.
         * @memberof domain
         * @classdesc Represents an AlbumParams.
         * @implements IAlbumParams
         * @constructor
         * @param {domain.IAlbumParams=} [properties] Properties to set
         */
        function AlbumParams(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AlbumParams taskId.
         * @member {string} taskId
         * @memberof domain.AlbumParams
         * @instance
         */
        AlbumParams.prototype.taskId = "";

        /**
         * AlbumParams page.
         * @member {number} page
         * @memberof domain.AlbumParams
         * @instance
         */
        AlbumParams.prototype.page = 0;

        /**
         * AlbumParams size.
         * @member {number} size
         * @memberof domain.AlbumParams
         * @instance
         */
        AlbumParams.prototype.size = 0;

        /**
         * Creates a new AlbumParams instance using the specified properties.
         * @function create
         * @memberof domain.AlbumParams
         * @static
         * @param {domain.IAlbumParams=} [properties] Properties to set
         * @returns {domain.AlbumParams} AlbumParams instance
         */
        AlbumParams.create = function create(properties) {
            return new AlbumParams(properties);
        };

        /**
         * Encodes the specified AlbumParams message. Does not implicitly {@link domain.AlbumParams.verify|verify} messages.
         * @function encode
         * @memberof domain.AlbumParams
         * @static
         * @param {domain.IAlbumParams} message AlbumParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AlbumParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.taskId);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.page);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
            return writer;
        };

        /**
         * Encodes the specified AlbumParams message, length delimited. Does not implicitly {@link domain.AlbumParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof domain.AlbumParams
         * @static
         * @param {domain.IAlbumParams} message AlbumParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AlbumParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AlbumParams message from the specified reader or buffer.
         * @function decode
         * @memberof domain.AlbumParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {domain.AlbumParams} AlbumParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AlbumParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.domain.AlbumParams();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.string();
                        break;
                    }
                case 2: {
                        message.page = reader.uint32();
                        break;
                    }
                case 3: {
                        message.size = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AlbumParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof domain.AlbumParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {domain.AlbumParams} AlbumParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AlbumParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AlbumParams message.
         * @function verify
         * @memberof domain.AlbumParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AlbumParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isString(message.taskId))
                    return "taskId: string expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size))
                    return "size: integer expected";
            return null;
        };

        /**
         * Creates an AlbumParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof domain.AlbumParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {domain.AlbumParams} AlbumParams
         */
        AlbumParams.fromObject = function fromObject(object) {
            if (object instanceof $root.domain.AlbumParams)
                return object;
            let message = new $root.domain.AlbumParams();
            if (object.taskId != null)
                message.taskId = String(object.taskId);
            if (object.page != null)
                message.page = object.page >>> 0;
            if (object.size != null)
                message.size = object.size >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AlbumParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof domain.AlbumParams
         * @static
         * @param {domain.AlbumParams} message AlbumParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AlbumParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.taskId = "";
                object.page = 0;
                object.size = 0;
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            return object;
        };

        /**
         * Converts this AlbumParams to JSON.
         * @function toJSON
         * @memberof domain.AlbumParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AlbumParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AlbumParams
         * @function getTypeUrl
         * @memberof domain.AlbumParams
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AlbumParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/domain.AlbumParams";
        };

        return AlbumParams;
    })();

    domain.Album = (function() {

        /**
         * Properties of an Album.
         * @memberof domain
         * @interface IAlbum
         * @property {boolean|null} [isVideo] Album isVideo
         * @property {number|null} [mediaId] Album mediaId
         * @property {string|null} [parent] Album parent
         * @property {string|null} [name] Album name
         * @property {number|Long|null} [modifiedTime] Album modifiedTime
         * @property {string|null} [mime] Album mime
         * @property {number|Long|null} [fileSize] Album fileSize
         * @property {number|null} [duration] Album duration
         * @property {number|null} [width] Album width
         * @property {number|null} [height] Album height
         * @property {number|null} [rotate] Album rotate
         * @property {boolean|null} [hadFillData] Album hadFillData
         */

        /**
         * Constructs a new Album.
         * @memberof domain
         * @classdesc Represents an Album.
         * @implements IAlbum
         * @constructor
         * @param {domain.IAlbum=} [properties] Properties to set
         */
        function Album(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Album isVideo.
         * @member {boolean} isVideo
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.isVideo = false;

        /**
         * Album mediaId.
         * @member {number} mediaId
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.mediaId = 0;

        /**
         * Album parent.
         * @member {string} parent
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.parent = "";

        /**
         * Album name.
         * @member {string} name
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.name = "";

        /**
         * Album modifiedTime.
         * @member {number|Long} modifiedTime
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.modifiedTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Album mime.
         * @member {string} mime
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.mime = "";

        /**
         * Album fileSize.
         * @member {number|Long} fileSize
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.fileSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Album duration.
         * @member {number} duration
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.duration = 0;

        /**
         * Album width.
         * @member {number} width
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.width = 0;

        /**
         * Album height.
         * @member {number} height
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.height = 0;

        /**
         * Album rotate.
         * @member {number} rotate
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.rotate = 0;

        /**
         * Album hadFillData.
         * @member {boolean} hadFillData
         * @memberof domain.Album
         * @instance
         */
        Album.prototype.hadFillData = false;

        /**
         * Creates a new Album instance using the specified properties.
         * @function create
         * @memberof domain.Album
         * @static
         * @param {domain.IAlbum=} [properties] Properties to set
         * @returns {domain.Album} Album instance
         */
        Album.create = function create(properties) {
            return new Album(properties);
        };

        /**
         * Encodes the specified Album message. Does not implicitly {@link domain.Album.verify|verify} messages.
         * @function encode
         * @memberof domain.Album
         * @static
         * @param {domain.IAlbum} message Album message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Album.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isVideo != null && Object.hasOwnProperty.call(message, "isVideo"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isVideo);
            if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mediaId);
            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.parent);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.modifiedTime != null && Object.hasOwnProperty.call(message, "modifiedTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.modifiedTime);
            if (message.mime != null && Object.hasOwnProperty.call(message, "mime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.mime);
            if (message.fileSize != null && Object.hasOwnProperty.call(message, "fileSize"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.fileSize);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.duration);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.height);
            if (message.rotate != null && Object.hasOwnProperty.call(message, "rotate"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.rotate);
            if (message.hadFillData != null && Object.hasOwnProperty.call(message, "hadFillData"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.hadFillData);
            return writer;
        };

        /**
         * Encodes the specified Album message, length delimited. Does not implicitly {@link domain.Album.verify|verify} messages.
         * @function encodeDelimited
         * @memberof domain.Album
         * @static
         * @param {domain.IAlbum} message Album message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Album.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Album message from the specified reader or buffer.
         * @function decode
         * @memberof domain.Album
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {domain.Album} Album
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Album.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.domain.Album();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isVideo = reader.bool();
                        break;
                    }
                case 2: {
                        message.mediaId = reader.uint32();
                        break;
                    }
                case 3: {
                        message.parent = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 5: {
                        message.modifiedTime = reader.uint64();
                        break;
                    }
                case 6: {
                        message.mime = reader.string();
                        break;
                    }
                case 8: {
                        message.fileSize = reader.uint64();
                        break;
                    }
                case 9: {
                        message.duration = reader.uint32();
                        break;
                    }
                case 10: {
                        message.width = reader.uint32();
                        break;
                    }
                case 11: {
                        message.height = reader.uint32();
                        break;
                    }
                case 12: {
                        message.rotate = reader.int32();
                        break;
                    }
                case 13: {
                        message.hadFillData = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Album message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof domain.Album
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {domain.Album} Album
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Album.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Album message.
         * @function verify
         * @memberof domain.Album
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Album.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isVideo != null && message.hasOwnProperty("isVideo"))
                if (typeof message.isVideo !== "boolean")
                    return "isVideo: boolean expected";
            if (message.mediaId != null && message.hasOwnProperty("mediaId"))
                if (!$util.isInteger(message.mediaId))
                    return "mediaId: integer expected";
            if (message.parent != null && message.hasOwnProperty("parent"))
                if (!$util.isString(message.parent))
                    return "parent: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.modifiedTime != null && message.hasOwnProperty("modifiedTime"))
                if (!$util.isInteger(message.modifiedTime) && !(message.modifiedTime && $util.isInteger(message.modifiedTime.low) && $util.isInteger(message.modifiedTime.high)))
                    return "modifiedTime: integer|Long expected";
            if (message.mime != null && message.hasOwnProperty("mime"))
                if (!$util.isString(message.mime))
                    return "mime: string expected";
            if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                if (!$util.isInteger(message.fileSize) && !(message.fileSize && $util.isInteger(message.fileSize.low) && $util.isInteger(message.fileSize.high)))
                    return "fileSize: integer|Long expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.rotate != null && message.hasOwnProperty("rotate"))
                if (!$util.isInteger(message.rotate))
                    return "rotate: integer expected";
            if (message.hadFillData != null && message.hasOwnProperty("hadFillData"))
                if (typeof message.hadFillData !== "boolean")
                    return "hadFillData: boolean expected";
            return null;
        };

        /**
         * Creates an Album message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof domain.Album
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {domain.Album} Album
         */
        Album.fromObject = function fromObject(object) {
            if (object instanceof $root.domain.Album)
                return object;
            let message = new $root.domain.Album();
            if (object.isVideo != null)
                message.isVideo = Boolean(object.isVideo);
            if (object.mediaId != null)
                message.mediaId = object.mediaId >>> 0;
            if (object.parent != null)
                message.parent = String(object.parent);
            if (object.name != null)
                message.name = String(object.name);
            if (object.modifiedTime != null)
                if ($util.Long)
                    (message.modifiedTime = $util.Long.fromValue(object.modifiedTime)).unsigned = true;
                else if (typeof object.modifiedTime === "string")
                    message.modifiedTime = parseInt(object.modifiedTime, 10);
                else if (typeof object.modifiedTime === "number")
                    message.modifiedTime = object.modifiedTime;
                else if (typeof object.modifiedTime === "object")
                    message.modifiedTime = new $util.LongBits(object.modifiedTime.low >>> 0, object.modifiedTime.high >>> 0).toNumber(true);
            if (object.mime != null)
                message.mime = String(object.mime);
            if (object.fileSize != null)
                if ($util.Long)
                    (message.fileSize = $util.Long.fromValue(object.fileSize)).unsigned = true;
                else if (typeof object.fileSize === "string")
                    message.fileSize = parseInt(object.fileSize, 10);
                else if (typeof object.fileSize === "number")
                    message.fileSize = object.fileSize;
                else if (typeof object.fileSize === "object")
                    message.fileSize = new $util.LongBits(object.fileSize.low >>> 0, object.fileSize.high >>> 0).toNumber(true);
            if (object.duration != null)
                message.duration = object.duration >>> 0;
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.rotate != null)
                message.rotate = object.rotate | 0;
            if (object.hadFillData != null)
                message.hadFillData = Boolean(object.hadFillData);
            return message;
        };

        /**
         * Creates a plain object from an Album message. Also converts values to other types if specified.
         * @function toObject
         * @memberof domain.Album
         * @static
         * @param {domain.Album} message Album
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Album.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.isVideo = false;
                object.mediaId = 0;
                object.parent = "";
                object.name = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.modifiedTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.modifiedTime = options.longs === String ? "0" : 0;
                object.mime = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.fileSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fileSize = options.longs === String ? "0" : 0;
                object.duration = 0;
                object.width = 0;
                object.height = 0;
                object.rotate = 0;
                object.hadFillData = false;
            }
            if (message.isVideo != null && message.hasOwnProperty("isVideo"))
                object.isVideo = message.isVideo;
            if (message.mediaId != null && message.hasOwnProperty("mediaId"))
                object.mediaId = message.mediaId;
            if (message.parent != null && message.hasOwnProperty("parent"))
                object.parent = message.parent;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.modifiedTime != null && message.hasOwnProperty("modifiedTime"))
                if (typeof message.modifiedTime === "number")
                    object.modifiedTime = options.longs === String ? String(message.modifiedTime) : message.modifiedTime;
                else
                    object.modifiedTime = options.longs === String ? $util.Long.prototype.toString.call(message.modifiedTime) : options.longs === Number ? new $util.LongBits(message.modifiedTime.low >>> 0, message.modifiedTime.high >>> 0).toNumber(true) : message.modifiedTime;
            if (message.mime != null && message.hasOwnProperty("mime"))
                object.mime = message.mime;
            if (message.fileSize != null && message.hasOwnProperty("fileSize"))
                if (typeof message.fileSize === "number")
                    object.fileSize = options.longs === String ? String(message.fileSize) : message.fileSize;
                else
                    object.fileSize = options.longs === String ? $util.Long.prototype.toString.call(message.fileSize) : options.longs === Number ? new $util.LongBits(message.fileSize.low >>> 0, message.fileSize.high >>> 0).toNumber(true) : message.fileSize;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.rotate != null && message.hasOwnProperty("rotate"))
                object.rotate = message.rotate;
            if (message.hadFillData != null && message.hasOwnProperty("hadFillData"))
                object.hadFillData = message.hadFillData;
            return object;
        };

        /**
         * Converts this Album to JSON.
         * @function toJSON
         * @memberof domain.Album
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Album.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Album
         * @function getTypeUrl
         * @memberof domain.Album
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Album.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/domain.Album";
        };

        return Album;
    })();

    domain.AlbumList = (function() {

        /**
         * Properties of an AlbumList.
         * @memberof domain
         * @interface IAlbumList
         * @property {string|null} [taskId] AlbumList taskId
         * @property {Array.<domain.IAlbum>|null} [list] AlbumList list
         */

        /**
         * Constructs a new AlbumList.
         * @memberof domain
         * @classdesc Represents an AlbumList.
         * @implements IAlbumList
         * @constructor
         * @param {domain.IAlbumList=} [properties] Properties to set
         */
        function AlbumList(properties) {
            this.list = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AlbumList taskId.
         * @member {string} taskId
         * @memberof domain.AlbumList
         * @instance
         */
        AlbumList.prototype.taskId = "";

        /**
         * AlbumList list.
         * @member {Array.<domain.IAlbum>} list
         * @memberof domain.AlbumList
         * @instance
         */
        AlbumList.prototype.list = $util.emptyArray;

        /**
         * Creates a new AlbumList instance using the specified properties.
         * @function create
         * @memberof domain.AlbumList
         * @static
         * @param {domain.IAlbumList=} [properties] Properties to set
         * @returns {domain.AlbumList} AlbumList instance
         */
        AlbumList.create = function create(properties) {
            return new AlbumList(properties);
        };

        /**
         * Encodes the specified AlbumList message. Does not implicitly {@link domain.AlbumList.verify|verify} messages.
         * @function encode
         * @memberof domain.AlbumList
         * @static
         * @param {domain.IAlbumList} message AlbumList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AlbumList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.taskId);
            if (message.list != null && message.list.length)
                for (let i = 0; i < message.list.length; ++i)
                    $root.domain.Album.encode(message.list[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AlbumList message, length delimited. Does not implicitly {@link domain.AlbumList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof domain.AlbumList
         * @static
         * @param {domain.IAlbumList} message AlbumList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AlbumList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AlbumList message from the specified reader or buffer.
         * @function decode
         * @memberof domain.AlbumList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {domain.AlbumList} AlbumList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AlbumList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.domain.AlbumList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.domain.Album.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AlbumList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof domain.AlbumList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {domain.AlbumList} AlbumList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AlbumList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AlbumList message.
         * @function verify
         * @memberof domain.AlbumList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AlbumList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isString(message.taskId))
                    return "taskId: string expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (let i = 0; i < message.list.length; ++i) {
                    let error = $root.domain.Album.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AlbumList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof domain.AlbumList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {domain.AlbumList} AlbumList
         */
        AlbumList.fromObject = function fromObject(object) {
            if (object instanceof $root.domain.AlbumList)
                return object;
            let message = new $root.domain.AlbumList();
            if (object.taskId != null)
                message.taskId = String(object.taskId);
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".domain.AlbumList.list: array expected");
                message.list = [];
                for (let i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".domain.AlbumList.list: object expected");
                    message.list[i] = $root.domain.Album.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AlbumList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof domain.AlbumList
         * @static
         * @param {domain.AlbumList} message AlbumList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AlbumList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                object.taskId = "";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.list && message.list.length) {
                object.list = [];
                for (let j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.domain.Album.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this AlbumList to JSON.
         * @function toJSON
         * @memberof domain.AlbumList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AlbumList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AlbumList
         * @function getTypeUrl
         * @memberof domain.AlbumList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AlbumList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/domain.AlbumList";
        };

        return AlbumList;
    })();

    domain.StringParams = (function() {

        /**
         * Properties of a StringParams.
         * @memberof domain
         * @interface IStringParams
         * @property {string|null} [taskId] StringParams taskId
         * @property {string|null} [content] StringParams content
         */

        /**
         * Constructs a new StringParams.
         * @memberof domain
         * @classdesc Represents a StringParams.
         * @implements IStringParams
         * @constructor
         * @param {domain.IStringParams=} [properties] Properties to set
         */
        function StringParams(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringParams taskId.
         * @member {string} taskId
         * @memberof domain.StringParams
         * @instance
         */
        StringParams.prototype.taskId = "";

        /**
         * StringParams content.
         * @member {string} content
         * @memberof domain.StringParams
         * @instance
         */
        StringParams.prototype.content = "";

        /**
         * Creates a new StringParams instance using the specified properties.
         * @function create
         * @memberof domain.StringParams
         * @static
         * @param {domain.IStringParams=} [properties] Properties to set
         * @returns {domain.StringParams} StringParams instance
         */
        StringParams.create = function create(properties) {
            return new StringParams(properties);
        };

        /**
         * Encodes the specified StringParams message. Does not implicitly {@link domain.StringParams.verify|verify} messages.
         * @function encode
         * @memberof domain.StringParams
         * @static
         * @param {domain.IStringParams} message StringParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.taskId);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified StringParams message, length delimited. Does not implicitly {@link domain.StringParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof domain.StringParams
         * @static
         * @param {domain.IStringParams} message StringParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringParams message from the specified reader or buffer.
         * @function decode
         * @memberof domain.StringParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {domain.StringParams} StringParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.domain.StringParams();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof domain.StringParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {domain.StringParams} StringParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringParams message.
         * @function verify
         * @memberof domain.StringParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isString(message.taskId))
                    return "taskId: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a StringParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof domain.StringParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {domain.StringParams} StringParams
         */
        StringParams.fromObject = function fromObject(object) {
            if (object instanceof $root.domain.StringParams)
                return object;
            let message = new $root.domain.StringParams();
            if (object.taskId != null)
                message.taskId = String(object.taskId);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a StringParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof domain.StringParams
         * @static
         * @param {domain.StringParams} message StringParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.taskId = "";
                object.content = "";
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this StringParams to JSON.
         * @function toJSON
         * @memberof domain.StringParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StringParams
         * @function getTypeUrl
         * @memberof domain.StringParams
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StringParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/domain.StringParams";
        };

        return StringParams;
    })();

    domain.BaseInfoParams = (function() {

        /**
         * Properties of a BaseInfoParams.
         * @memberof domain
         * @interface IBaseInfoParams
         * @property {string|null} [taskId] BaseInfoParams taskId
         */

        /**
         * Constructs a new BaseInfoParams.
         * @memberof domain
         * @classdesc Represents a BaseInfoParams.
         * @implements IBaseInfoParams
         * @constructor
         * @param {domain.IBaseInfoParams=} [properties] Properties to set
         */
        function BaseInfoParams(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseInfoParams taskId.
         * @member {string} taskId
         * @memberof domain.BaseInfoParams
         * @instance
         */
        BaseInfoParams.prototype.taskId = "";

        /**
         * Creates a new BaseInfoParams instance using the specified properties.
         * @function create
         * @memberof domain.BaseInfoParams
         * @static
         * @param {domain.IBaseInfoParams=} [properties] Properties to set
         * @returns {domain.BaseInfoParams} BaseInfoParams instance
         */
        BaseInfoParams.create = function create(properties) {
            return new BaseInfoParams(properties);
        };

        /**
         * Encodes the specified BaseInfoParams message. Does not implicitly {@link domain.BaseInfoParams.verify|verify} messages.
         * @function encode
         * @memberof domain.BaseInfoParams
         * @static
         * @param {domain.IBaseInfoParams} message BaseInfoParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseInfoParams.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.taskId);
            return writer;
        };

        /**
         * Encodes the specified BaseInfoParams message, length delimited. Does not implicitly {@link domain.BaseInfoParams.verify|verify} messages.
         * @function encodeDelimited
         * @memberof domain.BaseInfoParams
         * @static
         * @param {domain.IBaseInfoParams} message BaseInfoParams message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseInfoParams.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseInfoParams message from the specified reader or buffer.
         * @function decode
         * @memberof domain.BaseInfoParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {domain.BaseInfoParams} BaseInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseInfoParams.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.domain.BaseInfoParams();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseInfoParams message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof domain.BaseInfoParams
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {domain.BaseInfoParams} BaseInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseInfoParams.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseInfoParams message.
         * @function verify
         * @memberof domain.BaseInfoParams
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseInfoParams.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isString(message.taskId))
                    return "taskId: string expected";
            return null;
        };

        /**
         * Creates a BaseInfoParams message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof domain.BaseInfoParams
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {domain.BaseInfoParams} BaseInfoParams
         */
        BaseInfoParams.fromObject = function fromObject(object) {
            if (object instanceof $root.domain.BaseInfoParams)
                return object;
            let message = new $root.domain.BaseInfoParams();
            if (object.taskId != null)
                message.taskId = String(object.taskId);
            return message;
        };

        /**
         * Creates a plain object from a BaseInfoParams message. Also converts values to other types if specified.
         * @function toObject
         * @memberof domain.BaseInfoParams
         * @static
         * @param {domain.BaseInfoParams} message BaseInfoParams
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseInfoParams.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.taskId = "";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            return object;
        };

        /**
         * Converts this BaseInfoParams to JSON.
         * @function toJSON
         * @memberof domain.BaseInfoParams
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseInfoParams.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseInfoParams
         * @function getTypeUrl
         * @memberof domain.BaseInfoParams
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseInfoParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/domain.BaseInfoParams";
        };

        return BaseInfoParams;
    })();

    domain.BaseInfo = (function() {

        /**
         * Properties of a BaseInfo.
         * @memberof domain
         * @interface IBaseInfo
         * @property {string|null} [taskId] BaseInfo taskId
         * @property {string|null} [platform] BaseInfo platform
         * @property {string|null} [sysVersion] BaseInfo sysVersion
         * @property {string|null} [model] BaseInfo model
         * @property {string|null} [brand] BaseInfo brand
         * @property {number|null} [albumCount] BaseInfo albumCount
         * @property {string|null} [serverAddress] BaseInfo serverAddress
         */

        /**
         * Constructs a new BaseInfo.
         * @memberof domain
         * @classdesc Represents a BaseInfo.
         * @implements IBaseInfo
         * @constructor
         * @param {domain.IBaseInfo=} [properties] Properties to set
         */
        function BaseInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseInfo taskId.
         * @member {string} taskId
         * @memberof domain.BaseInfo
         * @instance
         */
        BaseInfo.prototype.taskId = "";

        /**
         * BaseInfo platform.
         * @member {string} platform
         * @memberof domain.BaseInfo
         * @instance
         */
        BaseInfo.prototype.platform = "";

        /**
         * BaseInfo sysVersion.
         * @member {string} sysVersion
         * @memberof domain.BaseInfo
         * @instance
         */
        BaseInfo.prototype.sysVersion = "";

        /**
         * BaseInfo model.
         * @member {string} model
         * @memberof domain.BaseInfo
         * @instance
         */
        BaseInfo.prototype.model = "";

        /**
         * BaseInfo brand.
         * @member {string} brand
         * @memberof domain.BaseInfo
         * @instance
         */
        BaseInfo.prototype.brand = "";

        /**
         * BaseInfo albumCount.
         * @member {number} albumCount
         * @memberof domain.BaseInfo
         * @instance
         */
        BaseInfo.prototype.albumCount = 0;

        /**
         * BaseInfo serverAddress.
         * @member {string} serverAddress
         * @memberof domain.BaseInfo
         * @instance
         */
        BaseInfo.prototype.serverAddress = "";

        /**
         * Creates a new BaseInfo instance using the specified properties.
         * @function create
         * @memberof domain.BaseInfo
         * @static
         * @param {domain.IBaseInfo=} [properties] Properties to set
         * @returns {domain.BaseInfo} BaseInfo instance
         */
        BaseInfo.create = function create(properties) {
            return new BaseInfo(properties);
        };

        /**
         * Encodes the specified BaseInfo message. Does not implicitly {@link domain.BaseInfo.verify|verify} messages.
         * @function encode
         * @memberof domain.BaseInfo
         * @static
         * @param {domain.IBaseInfo} message BaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.taskId);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.platform);
            if (message.sysVersion != null && Object.hasOwnProperty.call(message, "sysVersion"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sysVersion);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.model);
            if (message.brand != null && Object.hasOwnProperty.call(message, "brand"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.brand);
            if (message.albumCount != null && Object.hasOwnProperty.call(message, "albumCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.albumCount);
            if (message.serverAddress != null && Object.hasOwnProperty.call(message, "serverAddress"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.serverAddress);
            return writer;
        };

        /**
         * Encodes the specified BaseInfo message, length delimited. Does not implicitly {@link domain.BaseInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof domain.BaseInfo
         * @static
         * @param {domain.IBaseInfo} message BaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof domain.BaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {domain.BaseInfo} BaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.domain.BaseInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.string();
                        break;
                    }
                case 2: {
                        message.platform = reader.string();
                        break;
                    }
                case 3: {
                        message.sysVersion = reader.string();
                        break;
                    }
                case 4: {
                        message.model = reader.string();
                        break;
                    }
                case 5: {
                        message.brand = reader.string();
                        break;
                    }
                case 6: {
                        message.albumCount = reader.uint32();
                        break;
                    }
                case 7: {
                        message.serverAddress = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof domain.BaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {domain.BaseInfo} BaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseInfo message.
         * @function verify
         * @memberof domain.BaseInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isString(message.taskId))
                    return "taskId: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            if (message.sysVersion != null && message.hasOwnProperty("sysVersion"))
                if (!$util.isString(message.sysVersion))
                    return "sysVersion: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isString(message.model))
                    return "model: string expected";
            if (message.brand != null && message.hasOwnProperty("brand"))
                if (!$util.isString(message.brand))
                    return "brand: string expected";
            if (message.albumCount != null && message.hasOwnProperty("albumCount"))
                if (!$util.isInteger(message.albumCount))
                    return "albumCount: integer expected";
            if (message.serverAddress != null && message.hasOwnProperty("serverAddress"))
                if (!$util.isString(message.serverAddress))
                    return "serverAddress: string expected";
            return null;
        };

        /**
         * Creates a BaseInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof domain.BaseInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {domain.BaseInfo} BaseInfo
         */
        BaseInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.domain.BaseInfo)
                return object;
            let message = new $root.domain.BaseInfo();
            if (object.taskId != null)
                message.taskId = String(object.taskId);
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.sysVersion != null)
                message.sysVersion = String(object.sysVersion);
            if (object.model != null)
                message.model = String(object.model);
            if (object.brand != null)
                message.brand = String(object.brand);
            if (object.albumCount != null)
                message.albumCount = object.albumCount >>> 0;
            if (object.serverAddress != null)
                message.serverAddress = String(object.serverAddress);
            return message;
        };

        /**
         * Creates a plain object from a BaseInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof domain.BaseInfo
         * @static
         * @param {domain.BaseInfo} message BaseInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.taskId = "";
                object.platform = "";
                object.sysVersion = "";
                object.model = "";
                object.brand = "";
                object.albumCount = 0;
                object.serverAddress = "";
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.sysVersion != null && message.hasOwnProperty("sysVersion"))
                object.sysVersion = message.sysVersion;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.brand != null && message.hasOwnProperty("brand"))
                object.brand = message.brand;
            if (message.albumCount != null && message.hasOwnProperty("albumCount"))
                object.albumCount = message.albumCount;
            if (message.serverAddress != null && message.hasOwnProperty("serverAddress"))
                object.serverAddress = message.serverAddress;
            return object;
        };

        /**
         * Converts this BaseInfo to JSON.
         * @function toJSON
         * @memberof domain.BaseInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseInfo
         * @function getTypeUrl
         * @memberof domain.BaseInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/domain.BaseInfo";
        };

        return BaseInfo;
    })();

    return domain;
})();

export { $root as default };
