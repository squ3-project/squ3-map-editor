import Layer from "./Layer";
import Atlas from "./Atlas";
export default class DrawingLayer extends Layer {

    private selectedBrush:number = 1
    private atlas:Atlas

    constructor(_atlas:Atlas){
        super()
        this.atlas = _atlas
    }
    public changeBrush(_id:number){
            this.selectedBrush = _id
        }

    public drawBlock(_id:number, _x:number, _y:number){
        const [sx, sy] = this.atlas.getBlockCoords(_id)
        this.ctx!.drawImage(this.atlas.getTexturesImage(), sx, sy, this.atlas.getBlockWidth(), this.atlas.getBlockWidth(), _x*24, _y*24, 24, 24)
    }
}
