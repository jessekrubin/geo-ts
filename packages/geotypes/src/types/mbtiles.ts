export type MbtilesMetadataRow = {
  name: string;
  value: string;
};
export type MbtilesMetadataRows = MbtilesMetadataRow[];
export type MbtilesTilesRow<TTileData = Uint16Array> = {
  zoom_level: number;
  tile_column: number;
  tile_row: number;
  tile_data: TTileData;
};
