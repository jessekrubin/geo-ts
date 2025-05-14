import type { GeoJSON } from "@jsse/geotypes";
import typia from "typia";
export const isGeoJSON = (() => { const _ip0 = (input: any) => {
    const array = input;
    const tuplePredicators = [
        [
            (top: any[]): any => top.length === 3 && "number" === typeof top[0] && "number" === typeof top[1] && "number" === typeof top[2],
            (entire: any[]): any => entire.length === 3 && "number" === typeof entire[0] && "number" === typeof entire[1] && "number" === typeof entire[2]
        ] as const,
        [
            (top: any[]): any => top.length === 2 && "number" === typeof top[0] && "number" === typeof top[1],
            (entire: any[]): any => entire.length === 2 && "number" === typeof entire[0] && "number" === typeof entire[1]
        ] as const
    ];
    for (const pred of tuplePredicators)
        if (pred[0](array))
            return pred[1](array);
    return false;
}; const _ip1 = (input: any) => {
    const array = input;
    const tuplePredicators = [
        [
            (top: any[]): any => top.length === 6 && "number" === typeof top[0] && "number" === typeof top[1] && "number" === typeof top[2] && "number" === typeof top[3] && "number" === typeof top[4] && "number" === typeof top[5],
            (entire: any[]): any => entire.length === 6 && "number" === typeof entire[0] && "number" === typeof entire[1] && "number" === typeof entire[2] && "number" === typeof entire[3] && "number" === typeof entire[4] && "number" === typeof entire[5]
        ] as const,
        [
            (top: any[]): any => top.length === 4 && "number" === typeof top[0] && "number" === typeof top[1] && "number" === typeof top[2] && "number" === typeof top[3],
            (entire: any[]): any => entire.length === 4 && "number" === typeof entire[0] && "number" === typeof entire[1] && "number" === typeof entire[2] && "number" === typeof entire[3]
        ] as const
    ];
    for (const pred of tuplePredicators)
        if (pred[0](array))
            return pred[1](array);
    return false;
}; const _io0 = (input: any): boolean => "Point" === input.type && (Array.isArray(input.coordinates) && (_ip0(input.coordinates) || false)) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)); const _io1 = (input: any): boolean => "LineString" === input.type && (Array.isArray(input.coordinates) && (2 <= input.coordinates.length && input.coordinates.every((elem: any) => Array.isArray(elem) && (_ip0(elem) || false)))) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)); const _io2 = (input: any): boolean => "Polygon" === input.type && (Array.isArray(input.coordinates) && input.coordinates.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && (_ip0(elem) || false)))) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)); const _io3 = (input: any): boolean => "MultiPoint" === input.type && (Array.isArray(input.coordinates) && input.coordinates.every((elem: any) => Array.isArray(elem) && (_ip0(elem) || false))) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)); const _io4 = (input: any): boolean => "MultiLineString" === input.type && (Array.isArray(input.coordinates) && input.coordinates.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && (_ip0(elem) || false)))) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)); const _io5 = (input: any): boolean => "MultiPolygon" === input.type && (Array.isArray(input.coordinates) && input.coordinates.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && (_ip0(elem) || false))))) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)); const _io6 = (input: any): boolean => "GeometryCollection" === input.type && (Array.isArray(input.geometries) && input.geometries.every((elem: any) => "object" === typeof elem && null !== elem && _iu0(elem))); const _io7 = (input: any): boolean => "Feature" === input.type && (null === input.geometry || "object" === typeof input.geometry && null !== input.geometry && _iu0(input.geometry)) && (null === input.properties || "object" === typeof input.properties && null !== input.properties && false === Array.isArray(input.properties) && _io8(input.properties)) && (undefined === input.id || "string" === typeof input.id || "number" === typeof input.id) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)) && (undefined === input.crs || "object" === typeof input.crs && null !== input.crs && _iu1(input.crs)); const _io8 = (input: any): boolean => Object.keys(input).every((key: any) => {
    const value = input[key];
    if (undefined === value)
        return true;
    return true;
}); const _io9 = (input: any): boolean => "name" === input.type && ("object" === typeof input.properties && null !== input.properties && _io10(input.properties)); const _io10 = (input: any): boolean => "string" === typeof input.name; const _io11 = (input: any): boolean => "link" === input.type && ("object" === typeof input.properties && null !== input.properties && _io12(input.properties)); const _io12 = (input: any): boolean => "string" === typeof input.href && "string" === typeof input.type; const _io13 = (input: any): boolean => "FeatureCollection" === input.type && (Array.isArray(input.features) && input.features.every((elem: any) => "object" === typeof elem && null !== elem && _io14(elem))) && (undefined === input.id || "string" === typeof input.id || "number" === typeof input.id) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)) && (undefined === input.crs || "object" === typeof input.crs && null !== input.crs && _iu1(input.crs)); const _io14 = (input: any): boolean => "Feature" === input.type && ("object" === typeof input.geometry && null !== input.geometry && _iu0(input.geometry)) && (null === input.properties || "object" === typeof input.properties && null !== input.properties && false === Array.isArray(input.properties) && _io8(input.properties)) && (undefined === input.id || "string" === typeof input.id || "number" === typeof input.id) && (undefined === input.bbox || Array.isArray(input.bbox) && (_ip1(input.bbox) || false)) && (undefined === input.crs || "object" === typeof input.crs && null !== input.crs && _iu1(input.crs)); const _iu0 = (input: any): any => (() => {
    if ("MultiPolygon" === input.type)
        return _io5(input);
    else if ("MultiLineString" === input.type)
        return _io4(input);
    else if ("MultiPoint" === input.type)
        return _io3(input);
    else if ("Polygon" === input.type)
        return _io2(input);
    else if ("LineString" === input.type)
        return _io1(input);
    else if ("Point" === input.type)
        return _io0(input);
    else if ("GeometryCollection" === input.type)
        return _io6(input);
    else
        return false;
})(); const _iu1 = (input: any): any => (() => {
    if ("link" === input.type)
        return _io11(input);
    else if ("name" === input.type)
        return _io9(input);
    else
        return false;
})(); const _iu2 = (input: any): any => (() => {
    if ("MultiPolygon" === input.type)
        return _io5(input);
    else if ("MultiLineString" === input.type)
        return _io4(input);
    else if ("MultiPoint" === input.type)
        return _io3(input);
    else if ("Polygon" === input.type)
        return _io2(input);
    else if ("LineString" === input.type)
        return _io1(input);
    else if ("Point" === input.type)
        return _io0(input);
    else if ("GeometryCollection" === input.type)
        return _io6(input);
    else if ("Feature" === input.type)
        return _io7(input);
    else if ("FeatureCollection" === input.type)
        return _io13(input);
    else
        return false;
})(); return (input: any): input is GeoJSON => "object" === typeof input && null !== input && _iu2(input); })();
