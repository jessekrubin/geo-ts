export type Header = {
  "Content-Type"?: string;
  "Content-Encoding"?: string;
};

export type ReadonlyHeader = Readonly<Header>;

export type Extensions = "png" | "pbf" | "jpg" | "webp" | "gif";

export const PNG_HEADERS: ReadonlyHeader = {
  "Content-Type": "image/png",
};
export const JPG_HEADERS: ReadonlyHeader = {
  "Content-Type": "image/jpeg",
};
export const GIF_HEADERS: ReadonlyHeader = {
  "Content-Type": "image/gif",
};
export const WEBP_HEADERS: ReadonlyHeader = {
  "Content-Type": "image/webp",
};

export const PNG_BYTES_PREFIX = new Uint8Array([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
export const JPG_BYTES_PREFIX = new Uint8Array([0xff, 0xd8]);
export const GIF_BYTES_PREFIX = new Uint8Array([0x47, 0x49, 0x46, 0x38]);
export const WEBP_BYTES_PREFIX = new Uint8Array([0x52, 0x49, 0x46, 0x46]);
export const GZIP_BYTES_PREFIX = new Uint8Array([0x1f, 0x8b]);
export const DEFLATE_BYTES_PREFIX = new Uint8Array([0x78, 0x9c]);
export const ZSTD_BYTES_PREFIX = new Uint8Array([0x28, 0xb5, 0x2f, 0xfd]);

export function bufStartsWith(buffer: Uint8Array, prefix: Uint8Array): boolean {
  if (buffer.length < prefix.length) return false;
  for (const [i, element] of prefix.entries()) {
    if (buffer[i] !== element) return false;
  }
  return true;
}

/**
 * Given a buffer of unknown data, return either a format as an extension
 * string or false if the type cannot be determined.
 *
 * Potential options are:
 *
 * png
 * pbf
 * jpg
 * webp
 * @param {Uint8Array} buffer input
 * @returns {string | boolean} identifier
 */
export function type(buffer: Uint8Array): Extensions | false {
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return "png";
  } else if (
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer.at(-2) === 0xff &&
    buffer.at(-1) === 0xd9
  ) {
    return "jpg";
  } else if (
    buffer[0] === 0x47 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x38 &&
    (buffer[4] === 0x39 || buffer[4] === 0x37) &&
    buffer[5] === 0x61
  ) {
    return "gif";
  } else if (
    buffer[0] === 0x52 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x46 &&
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  ) {
    return "webp";
    // deflate: recklessly assumes contents are PBF.
  } else if (buffer[0] === 0x78 && buffer[1] === 0x9c) {
    return "pbf";
    // gzip: recklessly assumes contents are PBF.
  } else if (buffer[0] === 0x1f && buffer[1] === 0x8b) {
    return "pbf";
  }
  return false;
}

/**
 * Return headers - Content-Type and Content-Encoding -
 * for a response containing this kind of image.
 * @param {Uint8Array | false} buffer input
 * @returns {Header} headers
 */
export function headers(buffer: Uint8Array | false): Header {
  if (buffer === false) {
    return {};
  }
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return PNG_HEADERS;
  } else if (
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer.at(-2) === 0xff &&
    buffer.at(-1) === 0xd9
  ) {
    return JPG_HEADERS;
  } else if (
    buffer[0] === 0x47 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x38 &&
    (buffer[4] === 0x39 || buffer[4] === 0x37) &&
    buffer[5] === 0x61
  ) {
    return GIF_HEADERS;
  } else if (
    buffer[0] === 0x52 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x46 &&
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  ) {
    return WEBP_HEADERS;
    // deflate: recklessly assumes contents are PBF.
  } else if (buffer[0] === 0x78 && buffer[1] === 0x9c) {
    return {
      "Content-Type": "application/x-protobuf",
      "Content-Encoding": "deflate",
    };
    // gzip: recklessly assumes contents are PBF.
  } else if (buffer[0] === 0x1f && buffer[1] === 0x8b) {
    return {
      "Content-Type": "application/x-protobuf",
      "Content-Encoding": "gzip",
    };
  }
  return {};
}

/**
 * Determine the width and height of an image contained in a buffer,
 * returned as a [x, y] array.
 * @param {Uint8Array} buffer input
 * @returns {Array<number>|boolean} dimensions
 */
export function dimensions(buffer: Uint8Array): [number, number] | false {
  switch (type(buffer)) {
    case "png": {
      let i = 8;
      while (i + 8 < buffer.length) {
        // Ensure buffer is long enough
        const length = new DataView(
          buffer.buffer,
          buffer.byteOffset + i,
          4,
        ).getUint32(0, false);
        const chunktype = String.fromCodePoint(
          buffer[i + 4] ?? 0,
          buffer[i + 5] ?? 0,
          buffer[i + 6] ?? 0,
          buffer[i + 7] ?? 0,
        );
        // Invalid chunk.
        if (!length && chunktype !== "IEND") return false;
        // Length + type.
        i += 8;
        if (chunktype === "IHDR" && i + 8 < buffer.length) {
          const w =
            (buffer[i] ?? 0) * 2 ** 24 +
            (buffer[i + 1] ?? 0) * 2 ** 16 +
            (buffer[i + 2] ?? 0) * 2 ** 8 +
            (buffer[i + 3] ?? 0);
          const h =
            (buffer[i + 4] ?? 0) * 2 ** 24 +
            (buffer[i + 5] ?? 0) * 2 ** 16 +
            (buffer[i + 6] ?? 0) * 2 ** 8 +
            (buffer[i + 7] ?? 0);
          return [w, h];
        }
        // Skip CRC.
        i += length + 4;
      }
      break;
    }
    case "jpg": {
      let i = 2;
      while (i + 2 < buffer.length) {
        // Ensure buffer is long enough
        // Invalid chunk.
        if (buffer[i] !== 0xff) return false;
        const chunktype = buffer[i + 1];
        const length = (buffer[i + 2] ?? 0) * 256 + (buffer[i + 3] ?? 0);
        // Entropy-encoded begins after this chunk. Bail.
        if (chunktype === 0xda) {
          return false;
        } else if (chunktype === 0xc0 && i + 8 < buffer.length) {
          const h = (buffer[i + 5] ?? 0) * 256 + (buffer[i + 6] ?? 0);
          const w = (buffer[i + 7] ?? 0) * 256 + (buffer[i + 8] ?? 0);
          return [w, h];
        }
        i += 2 + length;
      }
      break;
    }
    case "gif": {
      if (buffer.length >= 10) {
        const w = (buffer[7] ?? 0) * 256 + (buffer[6] ?? 0);
        const h = (buffer[9] ?? 0) * 256 + (buffer[8] ?? 0);
        return [w, h];
      }
      break;
    }
    case "webp": {
      if (buffer.length >= 30) {
        const chunktype = String.fromCodePoint(
          buffer[12] ?? 0,
          buffer[13] ?? 0,
          buffer[14] ?? 0,
          buffer[15] ?? 0,
        );
        switch (chunktype) {
          case "VP8 ": {
            // Invalid chunk.
            if (
              buffer[23] !== 0x9d ||
              buffer[24] !== 0x01 ||
              buffer[25] !== 0x2a
            ) {
              return false;
            }
            const w = (buffer[26] ?? 0) | ((buffer[27] ?? 0) << 8);
            const h = (buffer[28] ?? 0) | ((buffer[29] ?? 0) << 8);
            return [w, h];
          }
          case "VP8L": {
            const w =
              1 + ((buffer[21] ?? 0) | (((buffer[22] ?? 0) & 0x3f) << 8));
            const h =
              1 +
              ((((buffer[22] ?? 0) & 0xc0) >> 6) |
                ((buffer[23] ?? 0) << 2) |
                (((buffer[24] ?? 0) & 0xf) << 10));
            return [w, h];
          }
          case "VP8X": {
            const w =
              1 +
              ((buffer[24] ?? 0) |
                ((buffer[25] ?? 0) << 8) |
                ((buffer[26] ?? 0) << 16));
            const h =
              1 +
              ((buffer[27] ?? 0) |
                ((buffer[28] ?? 0) << 8) |
                ((buffer[29] ?? 0) << 16));
            return [w, h];
          }
          // No default
        }
      }
      return false;
    }
  }
  return false;
}
