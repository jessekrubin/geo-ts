export type Rect2d<T = number> = {
  min: { x: T; y: T };
  max: { x: T; y: T };
};

export type Rect3d<T = number> = {
  min: { x: T; y: T; z: T };
  max: { x: T; y: T; z: T };
};
