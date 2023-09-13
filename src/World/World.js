import { createScene } from "./System/Scene";
import { createCamera } from "./Components/Camera";
import { createRenderer } from "./System/Renderer";
import { Resizer } from "./System/Resize";
import { Loop } from "./System/Loop";

import { createCube } from "./Components/Cube";
import { createControls } from "./System/Controls";

let camera;
let renderer;
let scene;
let loop;
class World {
  constructor() {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    document.body.appendChild(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    loop = new Loop(camera, scene, renderer);

    const cube = createCube();
    // loop.updatables.push(cube);
    scene.add(cube);

    const resizer = new Resizer(camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
