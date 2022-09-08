
// You can write more code here

/* START OF COMPILED CODE */

class StickSvg extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "stick", frame);

		/* START-USER-CTR-CODE */
	
		this.scene.events.on("create", () => this.create());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	preload(){

		console.log("entro a preload")
	}

	create(){
		
		var svgObjectBody = this.scene.matter.add.fromSVG(this.x-15, this.y,this.scene.cache.xml.get('stick'),0.6);
		var physicsObject = this.scene.matter.add.sprite(this.x,this.y,"stick",null,{ render: { sprite: { xOffset: -0.05, yOffset: -0.05 } }});
		physicsObject.body.destroy();
		this.scene.toWakeObjects.push(physicsObject);
		physicsObject.body=svgObjectBody;
		physicsObject.name="Stick";
	
		physicsObject.body.parts.forEach(branch => {
				branch.name="Stick";
		});
		
		this.destroy();


		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
