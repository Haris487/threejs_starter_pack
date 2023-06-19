const {Singleton} = require('./lib/singleton');
const {OrbitControls} = require('three/examples/jsm/controls/OrbitControls');
const {Cube} = require('./lib/cube');
const {Camera} = require('./lib/camera');
const THREE = Singleton.getInstance().THREE;
(async () => {
	window.Singleton = Singleton;
	const scene = Singleton.getInstance().scene;
	const camera = Singleton.getInstance().camera
	const renderer = new THREE.WebGLRenderer({antialias: true, logarithmicDepthBuffer: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	const controls = new OrbitControls( camera, renderer.domElement );
	const light = 	await Singleton.getInstance().light;
	scene.add( light );


	// Creating a box geometery
  const cube = new Cube(0,0,0,0xff0000);
	cube.create();
	Singleton.getInstance().cube = cube;

	// Creating a camera
	new Camera(0,0,-150).create();

	


	window.camera = camera;

	function animate() {
		requestAnimationFrame( animate );
		controls.update()
		renderer.render( scene, camera );
	}

	setInterval(()=>{
		Singleton.getInstance().updateDeltaTime();
	},500);
	animate();
  Singleton.getInstance().load()
})();


window.config = Singleton.getInstance();