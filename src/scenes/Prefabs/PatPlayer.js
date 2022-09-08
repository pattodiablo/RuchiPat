
// You can write more code here

/* START OF COMPILED CODE */

class PatPlayer extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "pat", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){

		var physicsObject = this.scene.matter.add.gameObject(this);
		physicsObject.setFrictionAir(0.01);
		physicsObject.setBounce(0.9);
	
		this.body.name="PatPlayer";
		this.reachRuchi=false;
		this.body.isOnBranch=false;

		this.scene.toWakeObjects.push(physicsObject);
		let RuchiPlayer = this.scene.RuchiPlaye
		let PatPlayer = this;
		this.setCollisionCategory(this.scene.players);
	
		
	
	}

	checkAnimationStatus(){

		if(this.body.isOnBranch){
			console.log("animacion para branche");
		}else{

			console.log("volar ");
		}

	}

	update(){
		this.checkAnimationStatus()
	
	
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
