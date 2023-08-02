import { Container, Sprite } from "pixi.js"

export class Globos extends Container {
    constructor(){
        super();
        const gLila: Sprite = Sprite.from("globoLila");
	    const gRojo: Sprite = Sprite.from("globoRojo");
	    const gAzul: Sprite = Sprite.from("globoAzul");
        gLila.position.set(350,40);
        gLila.angle = 10;
        gAzul.scale.set(1.4)
        gAzul.position.set(-10,-100);
        gRojo.scale.set(1.1);
        gRojo.position.set(-250  ,60);
        gRojo.angle = -15;
        this.addChild(gLila,gRojo,gAzul);
    }

};