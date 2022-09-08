
// You can write more code here

/* START OF COMPILED CODE */

class Chinche extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "chinche", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

		create(){
			
			var physicsObject = this.scene.matter.add.gameObject(this,{isStatic:true});
			
			this.setInteractive();

			this.on('pointerdown', function (pointer) {

				this.scene.toWakeObjects.forEach(wakeUpObjt => {
					wakeUpObjt.setAwake();
				});
				this.destroy();
		
			});
			
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
