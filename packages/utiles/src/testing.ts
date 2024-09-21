export function randomTile(): [number, number, number] {
  const z = Math.floor(Math.random() * 30);
  return [
    Math.floor(Math.random() * 2 ** z),
    Math.floor(Math.random() * 2 ** z),
    z,
  ];
}

export function randomQuadkey(): string {
  const z = Math.floor(Math.random() * 30);
  let qk = "";
  for (let ixz = z; ixz > 0; ixz--) {
    qk += Math.floor(Math.random() * 4).toString();
  }
  return qk;
}
