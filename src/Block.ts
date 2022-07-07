export default class Block{
    private id:number
    private x:number
    private y:number

    constructor(_id:number, _x:number, _y:number){
        this.id = _id
        this.x = _x
        this.y = _y
        
    }

    public getPosition():[number, number]{
        return [this.x, this.y]
    }
}