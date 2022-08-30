
// You can write more code here

/* START OF COMPILED CODE */

class PatPlayer extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "pat", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){

		var physicsObject = this.scene.matter.add.gameObject(this);
		physicsObject.setFrictionAir(0.01);
		physicsObject.setBounce(0.9);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
