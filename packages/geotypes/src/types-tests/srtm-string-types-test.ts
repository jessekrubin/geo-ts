import type { SrtmString } from "../types/srtm.js";

const validN00 = "N00E000" satisfies SrtmString;

// @ts-expect-error
const invalidN90 = "N90E000" satisfies SrtmString;

// @ts-expect-error
const invalidE180 = "N00E180" satisfies SrtmString;

// @ts-expect-error
const invalidW000 = "N00W000" satisfies SrtmString;

// @ts-expect-error
const invalidS00 = "S00E000" satisfies SrtmString;
