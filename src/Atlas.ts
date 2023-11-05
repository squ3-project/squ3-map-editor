/**
 * For creating texture collection
 */
 export default class Atlas{
    
    private texturesImage:HTMLImageElement 
    private width:number = 32 * 8
    private blockWidth:number = 32
    private blocksPerRow:number = 8
    private blockId:[number,number][] = []


    /**
     * Creates texture atlas from given image url
     * @param _url 
     */
    constructor(_url:string){
        this.texturesImage = new Image(this.width, this.width)
        this.texturesImage.src = _url
        this.cropForBlocks()
    }

    /**
     * Returns block width on atlas image
     */
    public getBlockWidth():number{
        return this.blockWidth
    }


    /**
     * Returns Promise for image load
     */
    public loadImage():Promise<HTMLImageElement>{
        return new Promise((resolve, reject) => {
            this.texturesImage.onload = () => resolve(this.texturesImage)
            this.texturesImage.onerror = () => reject("Not loaded")
        })
    }


    /**
     * Maps block id to coordinates on texturesImage (sx, sy).
     */
    private cropForBlocks():void{
        this.blockId[0] = [-this.blockWidth, -this.blockWidth] // id = 0 is empty (air block) 
        for (let i = 0; i < this.blocksPerRow; i++) {
            for (let j = 0; j < this.blocksPerRow; j++) {
                this.blockId[i*this.blocksPerRow + j + 1] = [j*this.blockWidth, i*this.blockWidth]
            }            
        }
    }

    /**
     * Returns sx and sy of block with given id
     * @param _id id of choosed block
     * @returns tuple where 0 index is sx of block and index 1 is sy of block 
     */
    public getBlockCoords(_id:number):[number, number]{
        // console.log("block: ", _id, this.blockId[_id])
        return this.blockId[_id]
    }

    /**
     * Returns image with every texture from atlas (texture atlas)
     * @returns image with texture atlas
     */
    public getTexturesImage():HTMLImageElement{
        return this.texturesImage
    }
}