import { Loader ,Application,  Sprite, Container, Point } from 'pixi.js';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize",()=>{
	console.log("resized");
	const scaleX = window.innerWidth / app.screen.width; 
	const scaleY = window.innerHeight /app.screen.height;
	const scale = Math.min(scaleX,scaleY);
	
	const gameWidth = Math.round(app.screen.width*scale);
	const gameHeight = Math.round(app.screen.height*scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";
	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";

	
	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";


	
})
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "dino.png", name: "myDino"});
Loader.shared.add({url: "hat.png", name: "Hat"});
Loader.shared.add({url: "globoLila.png", name: "globoLila"});
Loader.shared.add({url: "globoAzul.png", name: "globoAzul"});
Loader.shared.add({url: "globoRojo.png", name: "globoRojo"});

Loader.shared.onComplete.add(()=>{
	
	const dino: Sprite = Sprite.from("myDino");
	const dinoHat: Sprite = Sprite.from("Hat");
	const gLila: Sprite = Sprite.from("globoLila");
	const gRojo: Sprite = Sprite.from("globoRojo");
	const gAzul: Sprite = Sprite.from("globoAzul");
	const gLila2: Sprite = Sprite.from("globoLila");
	const gRojo2: Sprite = Sprite.from("globoRojo");
	const gAzul2: Sprite = Sprite.from("globoAzul");
	
	
	dino.x = 100;
	dino.y = 100;
	dinoHat.position.set(207,94);
	dinoHat.angle = 12;
	dinoHat.scale.set(0.04);
	dino.scale.x = 0.5;
	dino.scale.y = 0.5;
	gLila.position.set(350,40);
	gLila.angle = 10;
	gAzul.scale.set(1.4)
	gAzul.position.set(-10,-100);
	gRojo.scale.set(1.1);
	gRojo.position.set(-250  ,60);
	gRojo.angle = -15;
	gLila2.position.set(350,40);
	gLila2.angle = 10;
	gAzul2.scale.set(1.4)
	gAzul2.position.set(-10,-100);
	gRojo2.scale.set(1.1);
	gRojo2.position.set(-250  ,60);
	gRojo2.angle = -15;
	const dinoWithHat = new Container();
	const globos = new Container();
	const globos2 = new Container();
	dinoWithHat.addChild(dino,dinoHat);
	globos.addChild(gLila,gRojo,gAzul);
	globos2.addChild(gLila2,gRojo2,gAzul2);
	
	dinoWithHat.scale.set(1.4);
	dinoWithHat.position.set(300,200);
	globos.scale.set(0.2);
	globos2.scale.set(0.2);
	globos.position.set(900,200);
	globos2.position.set(300,300);
	console.log(dinoHat.toGlobal(new Point()));
	console.log(dinoHat.parent.toGlobal(dinoHat.position));

	//const aux = dinoHat.parent.toLocal(new Point(0,0));
	//dinoHat.position.copyFrom(aux);
	app.stage.addChild(dinoWithHat);
	app.stage.addChild(globos,globos2);



});
Loader.shared.load();



