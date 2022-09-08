
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// chinche
		const chinche = new Chinche(this, 165, 329);
		this.add.existing(chinche);

		// chinche_1
		const chinche_1 = new Chinche(this, 347, 331);
		this.add.existing(chinche_1);

		// stickSvg
		const stickSvg = new StickSvg(this, 229, 265);
		this.add.existing(stickSvg);
		stickSvg.scaleX = 1;
		stickSvg.scaleY = 1;

		// chinche_2
		const chinche_2 = new Chinche(this, 196, 567);
		this.add.existing(chinche_2);

		// chinche_3
		const chinche_3 = new Chinche(this, 406, 554);
		this.add.existing(chinche_3);

		// stickSvg_1
		const stickSvg_1 = new StickSvg(this, 314, 509);
		this.add.existing(stickSvg_1);
		stickSvg_1.scaleX = 1;
		stickSvg_1.scaleY = 1;

		// pat
		const pat = new PatPlayer(this, 234, 106);
		this.add.existing(pat);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here
	preload(){

		this.load.xml('stick', "assets/images/stick1.svg");
	}
	create() {
		this.toWakeObjects=[];	
		this.editorCreate();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
