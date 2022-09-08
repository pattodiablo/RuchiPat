
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

		// patPlayer
		const patPlayer = new PatPlayer(this, 270, 164);
		this.add.existing(patPlayer);

		// chinche_4
		const chinche_4 = new Chinche(this, 412, 856);
		this.add.existing(chinche_4);

		// chinche_5
		const chinche_5 = new Chinche(this, 216, 856);
		this.add.existing(chinche_5);

		// stickSvg_2
		const stickSvg_2 = new StickSvg(this, 318, 826);
		this.add.existing(stickSvg_2);
		stickSvg_2.scaleX = 1;
		stickSvg_2.scaleY = 1;

		// ruchiPlayer
		const ruchiPlayer = new RuchiPlayer(this, 330, 742);
		this.add.existing(ruchiPlayer);

		this.patPlayer = patPlayer;
		this.ruchiPlayer = ruchiPlayer;

		this.events.emit("scene-awake");
	}

	/** @type {PatPlayer} */
	patPlayer;
	/** @type {RuchiPlayer} */
	ruchiPlayer;

	/* START-USER-CODE */

	// Write more your code here
	preload(){

		this.load.xml('stick', "assets/images/stick1.svg");
	}
	create() {

		this.players = this.matter.world.nextCategory();
		this.branches = this.matter.world.nextCategory();
		this.havecollided = false
		this.toWakeObjects=[];	
		this.editorCreate();

		this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {

			if(bodyA.name == "PatPlayer" &&  bodyB.name=="RuchiPlayer" && !this.havecollided){

				console.log("tortolos colliding");
				this.havecollided=true;
			}
			
			if(bodyB.name == "PatPlayer"  && bodyA.name=="Stick"){
				bodyB.isOnBranch=true;
			}
			
			

	});

	
	this.matter.world.on('collisionend', function (event, bodyA, bodyB) {

		if(bodyB.name == "PatPlayer" && !bodyB.isSleeping){
			bodyB.isOnBranch=false;
		}

	});





	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
