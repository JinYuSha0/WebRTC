import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace domain. */
export namespace domain {

    /** Properties of an AlbumParams. */
    interface IAlbumParams {

        /** AlbumParams taskId */
        taskId?: (string|null);

        /** AlbumParams page */
        page?: (number|null);

        /** AlbumParams size */
        size?: (number|null);
    }

    /** Represents an AlbumParams. */
    class AlbumParams implements IAlbumParams {

        /**
         * Constructs a new AlbumParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: domain.IAlbumParams);

        /** AlbumParams taskId. */
        public taskId: string;

        /** AlbumParams page. */
        public page: number;

        /** AlbumParams size. */
        public size: number;

        /**
         * Creates a new AlbumParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AlbumParams instance
         */
        public static create(properties?: domain.IAlbumParams): domain.AlbumParams;

        /**
         * Encodes the specified AlbumParams message. Does not implicitly {@link domain.AlbumParams.verify|verify} messages.
         * @param message AlbumParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domain.IAlbumParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AlbumParams message, length delimited. Does not implicitly {@link domain.AlbumParams.verify|verify} messages.
         * @param message AlbumParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domain.IAlbumParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AlbumParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AlbumParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domain.AlbumParams;

        /**
         * Decodes an AlbumParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AlbumParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domain.AlbumParams;

        /**
         * Verifies an AlbumParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AlbumParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AlbumParams
         */
        public static fromObject(object: { [k: string]: any }): domain.AlbumParams;

        /**
         * Creates a plain object from an AlbumParams message. Also converts values to other types if specified.
         * @param message AlbumParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domain.AlbumParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AlbumParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AlbumParams
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Album. */
    interface IAlbum {

        /** Album isVideo */
        isVideo?: (boolean|null);

        /** Album mediaId */
        mediaId?: (number|null);

        /** Album parent */
        parent?: (string|null);

        /** Album name */
        name?: (string|null);

        /** Album modifiedTime */
        modifiedTime?: (number|Long|null);

        /** Album mime */
        mime?: (string|null);

        /** Album fileSize */
        fileSize?: (number|Long|null);

        /** Album duration */
        duration?: (number|null);

        /** Album width */
        width?: (number|null);

        /** Album height */
        height?: (number|null);

        /** Album rotate */
        rotate?: (number|null);

        /** Album hadFillData */
        hadFillData?: (boolean|null);
    }

    /** Represents an Album. */
    class Album implements IAlbum {

        /**
         * Constructs a new Album.
         * @param [properties] Properties to set
         */
        constructor(properties?: domain.IAlbum);

        /** Album isVideo. */
        public isVideo: boolean;

        /** Album mediaId. */
        public mediaId: number;

        /** Album parent. */
        public parent: string;

        /** Album name. */
        public name: string;

        /** Album modifiedTime. */
        public modifiedTime: (number|Long);

        /** Album mime. */
        public mime: string;

        /** Album fileSize. */
        public fileSize: (number|Long);

        /** Album duration. */
        public duration: number;

        /** Album width. */
        public width: number;

        /** Album height. */
        public height: number;

        /** Album rotate. */
        public rotate: number;

        /** Album hadFillData. */
        public hadFillData: boolean;

        /**
         * Creates a new Album instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Album instance
         */
        public static create(properties?: domain.IAlbum): domain.Album;

        /**
         * Encodes the specified Album message. Does not implicitly {@link domain.Album.verify|verify} messages.
         * @param message Album message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domain.IAlbum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Album message, length delimited. Does not implicitly {@link domain.Album.verify|verify} messages.
         * @param message Album message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domain.IAlbum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Album message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Album
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domain.Album;

        /**
         * Decodes an Album message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Album
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domain.Album;

        /**
         * Verifies an Album message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Album message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Album
         */
        public static fromObject(object: { [k: string]: any }): domain.Album;

        /**
         * Creates a plain object from an Album message. Also converts values to other types if specified.
         * @param message Album
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domain.Album, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Album to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Album
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AlbumList. */
    interface IAlbumList {

        /** AlbumList taskId */
        taskId?: (string|null);

        /** AlbumList list */
        list?: (domain.IAlbum[]|null);
    }

    /** Represents an AlbumList. */
    class AlbumList implements IAlbumList {

        /**
         * Constructs a new AlbumList.
         * @param [properties] Properties to set
         */
        constructor(properties?: domain.IAlbumList);

        /** AlbumList taskId. */
        public taskId: string;

        /** AlbumList list. */
        public list: domain.IAlbum[];

        /**
         * Creates a new AlbumList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AlbumList instance
         */
        public static create(properties?: domain.IAlbumList): domain.AlbumList;

        /**
         * Encodes the specified AlbumList message. Does not implicitly {@link domain.AlbumList.verify|verify} messages.
         * @param message AlbumList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domain.IAlbumList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AlbumList message, length delimited. Does not implicitly {@link domain.AlbumList.verify|verify} messages.
         * @param message AlbumList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domain.IAlbumList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AlbumList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AlbumList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domain.AlbumList;

        /**
         * Decodes an AlbumList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AlbumList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domain.AlbumList;

        /**
         * Verifies an AlbumList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AlbumList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AlbumList
         */
        public static fromObject(object: { [k: string]: any }): domain.AlbumList;

        /**
         * Creates a plain object from an AlbumList message. Also converts values to other types if specified.
         * @param message AlbumList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domain.AlbumList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AlbumList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AlbumList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StringParams. */
    interface IStringParams {

        /** StringParams taskId */
        taskId?: (string|null);

        /** StringParams content */
        content?: (string|null);
    }

    /** Represents a StringParams. */
    class StringParams implements IStringParams {

        /**
         * Constructs a new StringParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: domain.IStringParams);

        /** StringParams taskId. */
        public taskId: string;

        /** StringParams content. */
        public content: string;

        /**
         * Creates a new StringParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringParams instance
         */
        public static create(properties?: domain.IStringParams): domain.StringParams;

        /**
         * Encodes the specified StringParams message. Does not implicitly {@link domain.StringParams.verify|verify} messages.
         * @param message StringParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domain.IStringParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringParams message, length delimited. Does not implicitly {@link domain.StringParams.verify|verify} messages.
         * @param message StringParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domain.IStringParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domain.StringParams;

        /**
         * Decodes a StringParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domain.StringParams;

        /**
         * Verifies a StringParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringParams
         */
        public static fromObject(object: { [k: string]: any }): domain.StringParams;

        /**
         * Creates a plain object from a StringParams message. Also converts values to other types if specified.
         * @param message StringParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domain.StringParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StringParams
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BaseInfoParams. */
    interface IBaseInfoParams {

        /** BaseInfoParams taskId */
        taskId?: (string|null);
    }

    /** Represents a BaseInfoParams. */
    class BaseInfoParams implements IBaseInfoParams {

        /**
         * Constructs a new BaseInfoParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: domain.IBaseInfoParams);

        /** BaseInfoParams taskId. */
        public taskId: string;

        /**
         * Creates a new BaseInfoParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaseInfoParams instance
         */
        public static create(properties?: domain.IBaseInfoParams): domain.BaseInfoParams;

        /**
         * Encodes the specified BaseInfoParams message. Does not implicitly {@link domain.BaseInfoParams.verify|verify} messages.
         * @param message BaseInfoParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domain.IBaseInfoParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaseInfoParams message, length delimited. Does not implicitly {@link domain.BaseInfoParams.verify|verify} messages.
         * @param message BaseInfoParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domain.IBaseInfoParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaseInfoParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaseInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domain.BaseInfoParams;

        /**
         * Decodes a BaseInfoParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaseInfoParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domain.BaseInfoParams;

        /**
         * Verifies a BaseInfoParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaseInfoParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaseInfoParams
         */
        public static fromObject(object: { [k: string]: any }): domain.BaseInfoParams;

        /**
         * Creates a plain object from a BaseInfoParams message. Also converts values to other types if specified.
         * @param message BaseInfoParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domain.BaseInfoParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaseInfoParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BaseInfoParams
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BaseInfo. */
    interface IBaseInfo {

        /** BaseInfo taskId */
        taskId?: (string|null);

        /** BaseInfo platform */
        platform?: (string|null);

        /** BaseInfo sysVersion */
        sysVersion?: (string|null);

        /** BaseInfo model */
        model?: (string|null);

        /** BaseInfo brand */
        brand?: (string|null);

        /** BaseInfo albumCount */
        albumCount?: (number|null);

        /** BaseInfo serverAddress */
        serverAddress?: (string|null);
    }

    /** Represents a BaseInfo. */
    class BaseInfo implements IBaseInfo {

        /**
         * Constructs a new BaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: domain.IBaseInfo);

        /** BaseInfo taskId. */
        public taskId: string;

        /** BaseInfo platform. */
        public platform: string;

        /** BaseInfo sysVersion. */
        public sysVersion: string;

        /** BaseInfo model. */
        public model: string;

        /** BaseInfo brand. */
        public brand: string;

        /** BaseInfo albumCount. */
        public albumCount: number;

        /** BaseInfo serverAddress. */
        public serverAddress: string;

        /**
         * Creates a new BaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaseInfo instance
         */
        public static create(properties?: domain.IBaseInfo): domain.BaseInfo;

        /**
         * Encodes the specified BaseInfo message. Does not implicitly {@link domain.BaseInfo.verify|verify} messages.
         * @param message BaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: domain.IBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaseInfo message, length delimited. Does not implicitly {@link domain.BaseInfo.verify|verify} messages.
         * @param message BaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: domain.IBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domain.BaseInfo;

        /**
         * Decodes a BaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domain.BaseInfo;

        /**
         * Verifies a BaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaseInfo
         */
        public static fromObject(object: { [k: string]: any }): domain.BaseInfo;

        /**
         * Creates a plain object from a BaseInfo message. Also converts values to other types if specified.
         * @param message BaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: domain.BaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BaseInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
