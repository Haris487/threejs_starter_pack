const {Singleton} = require('./lib/singleton');
const {OrbitControls} = require('three/examples/jsm/controls/OrbitControls')
const THREE = Singleton.getInstance().THREE;
(async () => {
	window.Singleton = Singleton;
	const scene = Singleton.getInstance().scene;
	const camera = Singleton.getInstance().camera;
	const renderer = new THREE.WebGLRenderer({antialias: true, logarithmicDepthBuffer: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	const controls = new OrbitControls( camera, renderer.domElement );
	const light = 	await Singleton.getInstance().light;
	scene.add( light );


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