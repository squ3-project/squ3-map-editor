export default class Layer {

    protected canvas?:HTMLCanvasElement;
    protected ctx?:CanvasRenderingContext2D; 
    protected tileSize:number = 32;

    constructor(){
        this.createLayer()
    }
 
    public getCtx():CanvasRenderingContext2D{
        return this.ctx as CanvasRenderingContext2D
    }

    public getCanvas():HTMLCanvasElement{
        return this.canvas as HTMLCanvasElement
    }
    
    public clear():void{
        this.ctx?.clearRect(0, 0, 720, 720)
    }


    protected createLayer(){
        let canvas:HTMLCanvasElement = document.createElement('canvas')
        canvas.width = 720
        canvas.height = 720
        let ctx:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    
        this.canvas = canvas
        this.ctx = ctx
    }
}