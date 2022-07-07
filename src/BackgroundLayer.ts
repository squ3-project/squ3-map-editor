import Atlas from "./Atlas";
import Layer from "./Layer";

export default class BackgroundLayer extends Layer{

    private atlas:Atlas

    constructor(_atlas:Atlas){
        super()
        this.atlas = _atlas
        this.drawTiles()
    }

    private drawTiles(){
        this.ctx!.fillStyle = "#34495e";
    
        const nRow:number = 32;    
        const nCol:number = 32;
    
        const width:number = 24;
        const height:number = 24;
    
        for (var i = 0; i < nRow; ++i) {
            for (var j = 0, col = nCol / 2; j < col; ++j) {
                this.ctx!.fillRect(2 * j * width + (i % 2 ? 0 : width), i * height, width, height);
            }
        }
    }

    
    public drawBackgorund(_id:number){

        this.ctx?.clearRect(0, 0, 720, 720)

        const nRow:number = 32;    
        const nCol:number = 32;
    
        const width:number = 24;
        const height:number = 24;

        for (let i = 0; i < nRow; i++) {
            for (let j = 0; j < nCol; j++) {
                this.drawBlock(_id, i, j)
            }
            
        }
    }


    public drawBlock(_id:number, _x:number, _y:number){
        const [sx, sy] = this.atlas.getBlockCoords(_id)
        this.ctx!.drawImage(this.atlas.getTexturesImage(), sx, sy, this.atlas.getBlockWidth(), this.atlas.getBlockWidth(), _x*24, _y*24, 24, 24)
    }

    
}