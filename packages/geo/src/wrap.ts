export function wrapLon(lon: number): number {
  return lon > 180 || lon < -180
    ? ((((lon + 180) % 360) + 360) % 360) - 180
    : lon;
}

export function wrapLonEpsg3857(lon: number): number {
  return lon > 20_037_508.34 || lon < -20_037_508.34
    ? ((((lon + 20_037_508.34) % 40_075_016.68) + 40_075_016.68) %
        40_075_016.68) -
        20_037_508.34
    : lon;
}
