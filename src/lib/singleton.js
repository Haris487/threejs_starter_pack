
const THREE = require('three');

export class Singleton {
  static instance = null;
  constructor(){
    if(!this.instance){
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      this.loadingScreen = this.createLoadingScreen();
      this.light = new THREE.AmbientLight( 0xffffff );
      this.clock = new THREE.Clock();
      this.delta = this.clock.getDelta();
      this.THREE = THREE;
    }
    else{
      throw new Error("Singleton class can not create its another instance");
    }
  }

  updateDeltaTime(){
    this.delta = this.clock.getDelta();
  }

  static getInstance(){
    if(!this.instance){
      this.instance = new Singleton()
    }
    return this.instance;
  }

  load(){
    this.loadingScreen.hide()
  }

  createLoadingScreen(){
    class LoadingScreen {
      constructor(){
        this.element = document.getElementById( 'loading-screen' );
      }
      hide(){
        this.element.classList.add( 'fade-out' );
        setTimeout( () => this.element.style.display = 'none' , 500 );
      }
    }
    return new LoadingScreen();
  }
}