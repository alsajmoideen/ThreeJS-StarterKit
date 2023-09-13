import { BoxGeometry, MathUtils, Mesh, MeshBasicMaterial } from "three";

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(30);

  // Cube Loop Property
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
