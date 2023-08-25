import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace domain. */
export namespace domain {

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
}
