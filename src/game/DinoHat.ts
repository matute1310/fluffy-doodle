import { Container, Sprite } from "pixi.js";


export class DinoHat extends Container {
    constructor(){
        super();
        const dino: Sprite = Sprite.from("myDino");
        const dinoHat: Sprite = Sprite.from("Hat");
        dino.x = 100;
        dino.y = 100;
        dinoHat.position.set(207,94);
        dinoHat.angle = 12;
        dinoHat.scale.set(0.04);
        dino.scale.x = 0.5;
        dino.scale.y = 0.5;
        this.addChild(dino,dinoHat);
    }
    
}