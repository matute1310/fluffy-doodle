import { AnimatedSprite, Container, Texture } from "pixi.js";
import { Globos } from "../game/Globos";
import { DinoHat } from "../game/DinoHat";

export class Scene extends Container{
    constructor(){
        super();
        const dinoWithHat:DinoHat = new DinoHat();
        const globos:Globos = new Globos();
        const globos2:Globos = new Globos();

        dinoWithHat.scale.set(1.4);
        dinoWithHat.position.set(300,200);
        globos.scale.set(0.2);
        globos2.scale.set(0.2);
        globos.position.set(900,200);
        globos2.position.set(300,300);
        
        
        this.addChild(dinoWithHat);
        
        this.addChild(globos,globos2);

        const kayakAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("KayakA1"),
                Texture.from("KayakA2"),
                Texture.from("KayakA3"),
                Texture.from("KayakA4"),
                Texture.from("KayakA5"),
                Texture.from("KayakA6"),
                Texture.from("KayakA7"),
                Texture.from("KayakA8"),

            ],true
            

        );
        kayakAnimated.animationSpeed = 0.1;
        kayakAnimated.play()

        this.addChild(kayakAnimated);

        

    }

}