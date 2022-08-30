
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// pat
		const pat = new PatPlayer(this, 408, 69);
		this.add.existing(pat);

		// stick1
		const stick1 = new Stick(this, 399, 289);
		this.add.existing(stick1);

		// chinche
		const chinche = new Chinche(this, 208, 338);
		this.add.existing(chinche);

		// chinche_1
		const chinche_1 = new Chinche(this, 606, 351);
		this.add.existing(chinche_1);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
