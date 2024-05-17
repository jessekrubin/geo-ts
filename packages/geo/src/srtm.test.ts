import { assert, expect, test } from "vitest";
import { tuple } from "./tuple.js";
import {
  bbox2srtms,
  isSrtmString,
  ll2srtm,
  parseSrtm,
  parseSrtmString,
  srtm2bbox,
} from "./srtm.js";

test("ll2srtm", () => {
  for (let lng = -180; lng <= 180; lng += 1) {
    for (let lat = -90; lat <= 90; lat += 1) {
      const srtm = ll2srtm({ lng, lat });
      if (!isSrtmString(srtm.str)) {
        console.warn({ lng, lat, srtm });
      }
      assert(isSrtmString(srtm.str));
      assert(srtm.ns === (lat >= 0 ? "N" : "S"));
      assert(srtm.ew === (lng >= 0 ? "E" : "W"));
      if (lat === 90) {
        assert(srtm.lat === 89);
      } else {
        assert(srtm.lat === Math.floor(Math.abs(lat)));
      }
      if (lng !== 180 && lng !== -180) {
        assert(srtm.lng === Math.floor(Math.abs(lng)));
      } else {
        assert(srtm.lng === 179);
      }
      const roundTrip = parseSrtmString(srtm.str);
      expect(roundTrip).toStrictEqual(srtm);
    }
  }
});

test("parse-srtm", () => {
  for (let lng = -180; lng <= 180; lng += 3.5) {
    for (let lat = -90; lat <= 90; lat += 3.5) {
      const srtmObj = ll2srtm({ lng, lat });
      const reparsed = parseSrtm(srtmObj.str);
      expect(reparsed).toStrictEqual(srtmObj);
    }
  }
});

test("srtm-valid-is-180x360", () => {
  const valid = new Set();
  const weirdones = [];
  const idsSet = new Set<number>();
  const expectedIds = Array.from({ length: 180 * 360 }, (_, i) => i);
  for (let lng = -180; lng <= 180; lng += 0.5) {
    for (let lat = -90; lat <= 90; lat += 0.5) {
      const srtm = ll2srtm({ lng, lat });
      if (
        srtm.str.startsWith("S00") ||
        srtm.str.startsWith("N90") ||
        srtm.str.endsWith("E180") ||
        srtm.str.endsWith("W000")
      ) {
        weirdones.push(srtm.str);
      }
      valid.add(srtm.str);
      idsSet.add(srtm.ix.id);
    }
  }
  expect(valid.size).toBe(180 * 360);
  // check that all ids are unique and equal to 0..180*360
  const idsArr = [...idsSet];
  const invalidIds = idsArr.filter((id) => id < 0 || id >= 180 * 360);
  expect(
    invalidIds.length,
    `invalid ids: ${invalidIds.length}, ${invalidIds.join(", ")}`,
  ).toBe(0);
  expect(idsSet.size).toBe(180 * 360);
  expect([...idsSet].sort((a, b) => a - b)).toStrictEqual(expectedIds);
});

/**
 *
 * - S00; b/c it would really be N00
 * - N90; b/c anything at 90 degrees north should translate to N89
 * - E000; b/c it would really be W000
 * - W180; b/c anything at 180 degrees west should translate to W179
 */
test("srtm-invalid", () => {
  expect(isSrtmString("N00E000")).toBe(true);
  expect(isSrtmString("N90E000")).toBe(false);
  expect(isSrtmString("N00E180")).toBe(false);
  expect(isSrtmString("N00W000")).toBe(false);
  expect(isSrtmString("S00E000")).toBe(false);
});

test("bae-area-srtm-tiles", () => {
  // tile id (20, 49, 7) bbox of bay area
  const bbox = tuple(
    -123.75,
    36.597_889_133_070_21,
    -120.9375,
    38.822_590_976_177_1,
  );
  const srtmtiles = [...bbox2srtms(bbox)];
  const geojsonPolygons = srtmtiles.map((srtm) => {
    const bbox = srtm2bbox(srtm);
    return {
      type: "Feature",
      properties: {
        srtm,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [bbox[0], bbox[1]],
            [bbox[2], bbox[1]],
            [bbox[2], bbox[3]],
            [bbox[0], bbox[3]],
            [bbox[0], bbox[1]],
          ],
        ],
      },
    };
  });

  // tile polygon... can use on geojson.io
  const tile = {
    id: "(20, 49, 7)",
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-123.75, 36.597_889_133_070_21],
          [-123.75, 38.822_590_976_177_1],
          [-120.9375, 38.822_590_976_177_1],
          [-120.9375, 36.597_889_133_070_21],
          [-123.75, 36.597_889_133_070_21],
        ],
      ],
    },
    bbox: [-123.75, 36.597_889_133_070_21, -120.9375, 38.822_590_976_177_1],
    properties: {
      title: "XYZ tile (20, 49, 7)",
      properties: {
        title: "XYZ tile (20, 49, 7)",
        stroke: "#ff0000",
        "stroke-width": 2,
        "stroke-opacity": 1,
        fill: "#ff0000",
        "fill-opacity": 0.2,
      },
    },
  };
  const fc = {
    type: "FeatureCollection",
    features: [tile, ...geojsonPolygons],
  };

  const expected = [
    {
      str: "N36W124",
      ns: "N",
      lat: 36,
      ew: "W",
      lng: 124,
      ix: { x: 56, y: 126, id: 45_416 },
    },
    {
      str: "N36W123",
      ns: "N",
      lat: 36,
      ew: "W",
      lng: 123,
      ix: { x: 57, y: 126, id: 45_417 },
    },
    {
      str: "N36W122",
      ns: "N",
      lat: 36,
      ew: "W",
      lng: 122,
      ix: { x: 58, y: 126, id: 45_418 },
    },
    {
      str: "N36W121",
      ns: "N",
      lat: 36,
      ew: "W",
      lng: 121,
      ix: { x: 59, y: 126, id: 45_419 },
    },
    {
      str: "N37W124",
      ns: "N",
      lat: 37,
      ew: "W",
      lng: 124,
      ix: { x: 56, y: 127, id: 45_776 },
    },
    {
      str: "N37W123",
      ns: "N",
      lat: 37,
      ew: "W",
      lng: 123,
      ix: { x: 57, y: 127, id: 45_777 },
    },
    {
      str: "N37W122",
      ns: "N",
      lat: 37,
      ew: "W",
      lng: 122,
      ix: { x: 58, y: 127, id: 45_778 },
    },
    {
      str: "N37W121",
      ns: "N",
      lat: 37,
      ew: "W",
      lng: 121,
      ix: { x: 59, y: 127, id: 45_779 },
    },
    {
      str: "N38W124",
      ns: "N",
      lat: 38,
      ew: "W",
      lng: 124,
      ix: { x: 56, y: 128, id: 46_136 },
    },
    {
      str: "N38W123",
      ns: "N",
      lat: 38,
      ew: "W",
      lng: 123,
      ix: { x: 57, y: 128, id: 46_137 },
    },
    {
      str: "N38W122",
      ns: "N",
      lat: 38,
      ew: "W",
      lng: 122,
      ix: { x: 58, y: 128, id: 46_138 },
    },
    {
      str: "N38W121",
      ns: "N",
      lat: 38,
      ew: "W",
      lng: 121,
      ix: { x: 59, y: 128, id: 46_139 },
    },
  ];
  const expectedFeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        id: "(20, 49, 7)",
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-123.75, 36.597_889_133_070_21],
              [-123.75, 38.822_590_976_177_1],
              [-120.9375, 38.822_590_976_177_1],
              [-120.9375, 36.597_889_133_070_21],
              [-123.75, 36.597_889_133_070_21],
            ],
          ],
        },
        bbox: [-123.75, 36.597_889_133_070_21, -120.9375, 38.822_590_976_177_1],
        properties: {
          title: "XYZ tile (20, 49, 7)",
          properties: {
            title: "XYZ tile (20, 49, 7)",
            stroke: "#ff0000",
            "stroke-width": 2,
            "stroke-opacity": 1,
            fill: "#ff0000",
            "fill-opacity": 0.2,
          },
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N36W124",
            ns: "N",
            lat: 36,
            ew: "W",
            lng: 124,
            ix: { x: 56, y: 126, id: 45_416 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-124, 36],
              [-123, 36],
              [-123, 37],
              [-124, 37],
              [-124, 36],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N36W123",
            ns: "N",
            lat: 36,
            ew: "W",
            lng: 123,
            ix: { x: 57, y: 126, id: 45_417 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-123, 36],
              [-122, 36],
              [-122, 37],
              [-123, 37],
              [-123, 36],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N36W122",
            ns: "N",
            lat: 36,
            ew: "W",
            lng: 122,
            ix: { x: 58, y: 126, id: 45_418 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-122, 36],
              [-121, 36],
              [-121, 37],
              [-122, 37],
              [-122, 36],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N36W121",
            ns: "N",
            lat: 36,
            ew: "W",
            lng: 121,
            ix: { x: 59, y: 126, id: 45_419 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-121, 36],
              [-120, 36],
              [-120, 37],
              [-121, 37],
              [-121, 36],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N37W124",
            ns: "N",
            lat: 37,
            ew: "W",
            lng: 124,
            ix: { x: 56, y: 127, id: 45_776 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-124, 37],
              [-123, 37],
              [-123, 38],
              [-124, 38],
              [-124, 37],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N37W123",
            ns: "N",
            lat: 37,
            ew: "W",
            lng: 123,
            ix: { x: 57, y: 127, id: 45_777 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-123, 37],
              [-122, 37],
              [-122, 38],
              [-123, 38],
              [-123, 37],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N37W122",
            ns: "N",
            lat: 37,
            ew: "W",
            lng: 122,
            ix: { x: 58, y: 127, id: 45_778 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-122, 37],
              [-121, 37],
              [-121, 38],
              [-122, 38],
              [-122, 37],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N37W121",
            ns: "N",
            lat: 37,
            ew: "W",
            lng: 121,
            ix: { x: 59, y: 127, id: 45_779 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-121, 37],
              [-120, 37],
              [-120, 38],
              [-121, 38],
              [-121, 37],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N38W124",
            ns: "N",
            lat: 38,
            ew: "W",
            lng: 124,
            ix: { x: 56, y: 128, id: 46_136 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-124, 38],
              [-123, 38],
              [-123, 39],
              [-124, 39],
              [-124, 38],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N38W123",
            ns: "N",
            lat: 38,
            ew: "W",
            lng: 123,
            ix: { x: 57, y: 128, id: 46_137 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-123, 38],
              [-122, 38],
              [-122, 39],
              [-123, 39],
              [-123, 38],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N38W122",
            ns: "N",
            lat: 38,
            ew: "W",
            lng: 122,
            ix: { x: 58, y: 128, id: 46_138 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-122, 38],
              [-121, 38],
              [-121, 39],
              [-122, 39],
              [-122, 38],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          srtm: {
            str: "N38W121",
            ns: "N",
            lat: 38,
            ew: "W",
            lng: 121,
            ix: { x: 59, y: 128, id: 46_139 },
          },
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-121, 38],
              [-120, 38],
              [-120, 39],
              [-121, 39],
              [-121, 38],
            ],
          ],
        },
      },
    ],
  };
  expect(srtmtiles).toStrictEqual(expected);
  expect(fc).toStrictEqual(expectedFeatureCollection);
});
