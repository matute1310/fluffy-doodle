import { Container, Sprite, Texture,Text } from "pixi.js"
import { Button } from "../ui/Button";
import { Keyboard } from "../utils/Keyboard";


export class  UIDemo extends Container{
    private buttonMouse:Button;
    private lastKeyPressed:Text;
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
            Texture.from("StartButton1")
            //this.onButtonClick.bind(this)// DE ESTA MANERA ASEGURAMOS QUE EL BINDEO SEA AL THIS DEL OBJETO buttonMouse y no del Button.
            
        );
        this.buttonMouse.on("buttonClick", this.onButtonClick, this); // de esta forma se quita el evento del constructor
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
        this.lastKeyPressed = new Text("Waiting...",{fontSize:20});
        this.lastKeyPressed.anchor.set(0.5);
        this.lastKeyPressed.position.set(195,290);
        this.addChild( this.lastKeyPressed);
        
        Keyboard.down.on("KeyB",this.OnKeyB,this) //evento creado con event emitter
        Keyboard.up.on("KeyB",this.OnKeyBUp,this) //evento creado con event emitter
 
        
        
    }

    
    private OnKeyB():void{
        console.log("aprete la b", this);
    }
    private OnKeyBUp():void{
        console.log("solte la b", this);
    }
    private onButtonClick():void{
        console.log("my new button clicked", this);
    }
    

}