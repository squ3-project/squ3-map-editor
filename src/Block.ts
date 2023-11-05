export default class Block{
    private id:number
    private x:number
    private y:number
    private collision:boolean

    constructor(_id:number, _x:number, _y:number, _collision:boolean = false){
        this.id = _id
        this.x = _x
        this.y = _y
        this.collision = _collision
    }

    public getId():number{
        return this.id
    }

    public getPosition():[number, number]{
        return [this.x, this.y]
    }

    public getCollision():boolean{
        return this.collision
    }

    public addCollision() {
        this.collision = true
    }
}