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

    public drawCollision(_x:number, _y:number){
        const ctx = this.ctx!
        _x = _x * 24
        _y = _y * 24
        ctx.beginPath()
        ctx.moveTo(_x+1, _y+1)
        ctx.lineTo(_x+23, _y+23)
        ctx.strokeStyle = "red"
        ctx.lineWidth = 1
        ctx.stroke()
    }

    public eraseBlock(_x:number,_y:number){
        this.ctx!.clearRect(_x*24,_y*24,24,24)
    }
}
