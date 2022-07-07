import BackgroundLayer from "./BackgroundLayer";
import DrawingLayer from "./DrawingLayer";
import MouseLayer from "./MouseLayer";
import {getMousePos} from "./MousePos"
import { changeBrush } from "./ToggleBrush";
import Atlas from "./Atlas"
// import atlasImg from './assets/img/atlas.png'
import './style.scss'

let mouseDown:boolean = false;

const brushElement = document.getElementById('brush-icon') as HTMLImageElement
const eraserElement = document.getElementById('eraser-icon') as HTMLImageElement
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx:CanvasRenderingContext2D = canvas?.getContext("2d") as CanvasRenderingContext2D;
const backgroundBlockIdInput = document.getElementById('backgroundBlockId') as HTMLInputElement
canvas!.height = 720
canvas!.width = 720
let backgroundLayer:BackgroundLayer
let mouseLayer:MouseLayer
let drawingLayer:DrawingLayer
let atlas:Atlas
let selectedBrush:number = 1
let selectedBlockId:number = 8


start()

async function start(){
    atlas = new Atlas("http://192.168.8.101:4444/getatlas")
    backgroundLayer = new BackgroundLayer(atlas)
    mouseLayer = new MouseLayer()
    await atlas.loadImage()
    console.log("Textures loaded!")
    drawingLayer = new DrawingLayer(atlas)
    updateLayers()
    changeCursor()
    createTextureSelector()
}
brushElement.addEventListener("click", () => {
    // changeBrush(1)
    selectedBrush = 1
    console.log(`brush changed to ${changeBrush(1)}`)
})

eraserElement.addEventListener("click", () => {
    // changeBrush(0)
    selectedBrush = 0
    console.log(`brush changed to ${changeBrush(0)}`)
})

backgroundBlockIdInput.addEventListener("keyup", function(e:Event){
    const id = parseInt(this.value)
    if(id && id < 10000){
        backgroundLayer.drawBackgorund(id)
        updateLayers()
    }
    // console.log(this.value)
}) 

function createTextureSelector(){
    const url = "http://192.168.8.101:4444/getatlas"
    for (let i = 1; i < 10; i++) {
        const createdTile = createTile(i, url)
        document.getElementById("texture-selector-container")?.append(createdTile)
    }
}

// function createTiles(_img:HTMLImageElement){




// }

function createTile(_id:number, _url:string):HTMLDivElement{
    const tile = document.createElement('div')
    tile.addEventListener("click", (e:Event) => {
        selectedBlockId = _id
    })
    tile.id = "texture-tile"
    const [sx, sy] = atlas.getBlockCoords(_id)
    tile.style.setProperty('background',`url(${_url}) -${sx}px -${sy}px`)
    return tile
}


function updateLayers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundLayer.getCanvas(), 0, 0)
    ctx.drawImage(mouseLayer.getCanvas(),0,0)
    ctx.drawImage(drawingLayer.getCanvas(),0,0)
}

function changeCursor(): void{
    mouseLayer.getCtx().fillStyle = "rgba(0,0,0,0.4)"
    document.addEventListener("mousemove", (event:MouseEvent) => {
        let mousePosition = getMousePos(event,canvas);
        mouseLayer.clear()
        mouseLayer.getCtx().fillRect(mousePosition.x*24,mousePosition.y*24,24,24)
        updateLayers()
    })
}

 document.addEventListener("mousedown", (event:MouseEvent) => {
    let {x, y} = getMousePos(event, canvas);
    mouseDown = true
    if(selectedBrush == 1){
        console.log('jest git (1)')
        drawingLayer.drawBlock(selectedBlockId, x, y)
        updateLayers()
    }
    if(selectedBrush == 0){
        console.log('jest eraser')
        drawingLayer.getCtx().clearRect(x,y,32,32)
        updateLayers()
    }

        document.addEventListener("mousemove", (event:MouseEvent) => {
            
            
            if(mouseDown == true){
                if(1){
                    let {x, y} = getMousePos(event, canvas);
                    drawingLayer.drawBlock(selectedBlockId, x, y)
                    updateLayers()
                }

            }
        })
        document.addEventListener("mouseup", (event:MouseEvent) => {
            mouseDown = false
        })
})