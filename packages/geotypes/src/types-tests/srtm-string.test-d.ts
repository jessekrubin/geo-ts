/* eslint-disable @typescript-eslint/no-unused-vars */
import type { SrtmString } from "../types/srtm.js";

const validN00 = "N00E000" satisfies SrtmString;

// @ts-expect-error - invalid N
const invalidN90 = "N90E000" satisfies SrtmString;

// @ts-expect-error - invalid E
const invalidE180 = "N00E180" satisfies SrtmString;

// @ts-expect-error - invalid S
const invalidW000 = "N00W000" satisfies SrtmString;

// @ts-expect-error - invalid S
const invalidS00 = "S00E000" satisfies SrtmString;
