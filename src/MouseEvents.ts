import { updateLayers } from "./index"
import { getMousePos } from "./MousePos"
import MouseLayer from "./MouseLayer"

export default class MouseEvents {

    private mouseLayer:MouseLayer

    constructor(_mouseLayer:MouseLayer){
        this.mouseLayer = _mouseLayer
    }

    private canvas = document.getElementById('canvas') as HTMLCanvasElement

    public changeCursor(): void{
        this.mouseLayer.getCtx().fillStyle = "rgba(0,0,0,0.4)"
        document.addEventListener("mousemove", (event:MouseEvent) => {
            let mousePosition = getMousePos(event,this.canvas);
            this.mouseLayer.clear()
            this.mouseLayer.getCtx().fillRect(mousePosition.x*24,mousePosition.y*24,24,24)
            updateLayers()
        })
    }

}