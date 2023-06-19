import { Singleton } from "./singleton"
const THREE = Singleton.getInstance().THREE;


export class Cube {
  constructor(x, y, z, color) {
    this.color = color;
    this.pos = [x, y, z];
  }

  getMaterial(color) {
    return new THREE.MeshBasicMaterial({ color: color });
  }

  create() {
    const cubeEdges = new THREE.Object3D()
    const geometry = new THREE.BoxGeometry(45, 45, 45);
    const edgesGeometry = new THREE.EdgesGeometry( new THREE.BoxGeometry(50, 50, 50) );
    const lineMaterial = new THREE.LineBasicMaterial(0xffff00);
    const edges = new THREE.LineSegments( edgesGeometry, lineMaterial );
    cubeEdges.add(edges);



    const material = this.getMaterial(this.color);
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    this.scene = Singleton.getInstance().scene;
    this.scene.add(cube);
    this.scene.add(cubeEdges);
    this.cube = cube;
    this.cubeEdges = cubeEdges;
    Singleton.getInstance().addDebug('cube',cube);
    Singleton.getInstance().addDebug('cubeEdges',cubeEdges);
  }
}