import { Container, Sprite, Texture,Text } from "pixi.js"
import { Button } from "../ui/Button";


export class  UIDemo extends Container{
    private buttonMouse:Button;
    constructor(){
        super();
        
        const menu:Sprite = Sprite.from("menu");
        menu.scale.set(1.2)
        menu.position.set(100,100)
        this.addChild(menu);

        // Boton Mause Start
        this.buttonMouse = new Button(
            Texture.from("StartButton1"),
            Texture.from("StartButton3"),
            Texture.from("StartButton1"),
            this.onButtonClick.bind(this)// DE ESTA MANERA ASEGURAMOS QUE EL BINDEO SEA AL THIS DEL OBJETO buttonMouse y no del Button.
        );
        this.buttonMouse.position.set(115,125);
        this.buttonMouse.scale.set(1.2);
        this.addChild(this.buttonMouse);

        // botonTouch On
        const botonTouch:Sprite = Sprite.from("OnButton1");
        botonTouch.position.set(200,125)
        botonTouch.scale.set(1.2)

        this.addChild(botonTouch)

        //botton pointer shutDownGreen
        const botonPointer:Sprite = Sprite.from("shutDownGreen");
        botonPointer.position.set(170,200);
        botonPointer.scale.set(1.2);
        this.addChild(botonPointer)

        //Texto
        const lastKeyPressed = new Text("Waiting...",{fontSize:20});
        lastKeyPressed.anchor.set(0.5);
        lastKeyPressed.position.set(195,290);
        this.addChild(lastKeyPressed)
        
        document.addEventListener("keydown", this.onKeyDown.bind(this));
        
        ;
    }

    
    private onButtonClick():void{
        console.log("my new button clicked", this);
    }
    private onKeyDown(e:KeyboardEvent):void{
        console.log("key pressed", e);
    }
   

}