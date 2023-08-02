import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{
    private def:Texture;
    private down:Texture;
    private over:Texture;
    private callback:Function;

    private spr:Sprite;
    
    constructor(def:Texture, down:Texture, over:Texture,callback:Function)
    {
        super();
        this.def=def;
        this.down=down;
        this.over=over;
        this.callback=callback;

        this.spr = Sprite.from(def);
        this.spr.interactive = true;
        this.spr.on("pointerdown",this.onMouseDown, this); // genera el evento onMouseDown
        this.spr.on("pointerup",this.onMouseUp, this); // genera el evento onMouseUp
        this.spr.on("pointerover", this.onMouseOver, this);
        this.spr.on("pointerout", this.onMouseOut, this);
        this.addChild(this.spr);
        
    }
    private onMouseDown():void{
        this.spr.texture= this.down;
    }
    private onMouseUp():void{ 
        this.callback();
        this.spr.texture= this.over;
    }
    private onMouseOver():void{
        this.spr.texture= this.over;
    }
    private onMouseOut():void{
        this.spr.texture= this.def
        
    }
}
