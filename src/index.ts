import BackgroundLayer from "./BackgroundLayer";
import DrawingLayer from "./DrawingLayer";
import MouseLayer from "./MouseLayer";
import {getMousePos} from "./MousePos"
import { changeBrush, getBrush } from "./ToggleBrush";
import {MapBefore, MapAfter, Structure, Portal, Interactions} from './MapInterfaces'
import Atlas from "./Atlas"
import './_style.scss'
import Block from "./Block";
import MouseEvents from "./MouseEvents";
import atlasImg from './assets/img/atlas.png'


let mouseDown:boolean = false;

const brushElement = document.getElementById('brush-icon') as HTMLImageElement
const eraserElement = document.getElementById('eraser-icon') as HTMLImageElement
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx:CanvasRenderingContext2D = canvas?.getContext("2d") as CanvasRenderingContext2D;
const backgroundBlockIdInput = document.getElementById('backgroundBlockId') as HTMLInputElement
const saveBtn = document.getElementById('save-button') as HTMLElement
const resetBtn = document.getElementById('reset-button') as HTMLElement

canvas!.height = 720
canvas!.width = 720
let backgroundLayer:BackgroundLayer
let mouseLayer:MouseLayer
let drawingLayer:DrawingLayer
let mouseEvents:MouseEvents
let atlas:Atlas
// let selectedBrush:number = 1
let selectedBlockId:number = 1

let blocksPlaced:Block[] = []


let backgroundBlockId:number = 0
let stuctures:Structure[]
// let interactions = []

// const atlasUrl = "http://192.168.8.101:4444/getatlas"

const serverUrl = "https://squ3-server.herokuapp.com"
const atlasUrl = serverUrl + "/getatlas"

function updateLayers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundLayer.getCanvas(), 0, 0)
    ctx.drawImage(drawingLayer.getCanvas(),0,0)
    ctx.drawImage(mouseLayer.getCanvas(),0,0)
}

start()
async function start(){
    atlas = new Atlas(atlasUrl)
    backgroundLayer = new BackgroundLayer(atlas)
    mouseLayer = new MouseLayer()
    mouseEvents = new MouseEvents(mouseLayer)
    await atlas.loadImage()
    console.log("Textures loaded!")
    drawingLayer = new DrawingLayer(atlas)
    updateLayers()
    createTextureSelector()
    mouseEvents.changeCursor()
}

brushElement.addEventListener("click", () => {
    changeBrush(1)
    console.log(`brush changed to ${getBrush()}`)
})

eraserElement.addEventListener("click", () => {
    changeBrush(0)
    console.log(`brush changed to ${getBrush()}`)
})

backgroundBlockIdInput.addEventListener("keyup", function(e:Event){
    const id = parseInt(this.value)
    if(id && id < 10000){
        backgroundLayer.drawBackgorund(id)
        backgroundBlockId = id
        updateLayers()
    }
}) 

function createTextureSelector(){
    const url = atlasUrl
    for (let i = 1; i < 100; i++) {
        const createdTile = createTile(i, url)
        document.getElementById("texture-selector-container")?.append(createdTile)
    }
}

function calcutePositionInArray(x:number, y:number):number{
    return x + y*30
}

function createMapObject(){
    const mapObj:MapBefore = { backgroundBlock: backgroundBlockId, structures: [], interactions: []}

    const mapAfter:MapAfter = {backgroundBlockId: 0, mapString: "", collisionString: "", interactions: []}

    blocksPlaced.forEach(block => {
        const [x, y] = block.getPosition()
        const id = block.getId()
        mapObj.structures.push({id,x,y,c: false})

    })

    const len = 900

    const mapArray:string[] = []
    const collisionArray:string[] = []
    for (let i = 0; i < len; i++) {
        mapArray[i] = "x"
        collisionArray[i] = "0"
    }

    
    mapObj.structures.forEach((structure:Structure) => {
        const position = calcutePositionInArray(structure.x, structure.y)
        mapArray[position] = structure.id.toString()
        if(structure.c) collisionArray[position] = "1"
    })

    mapAfter["backgroundBlockId"] = mapObj.backgroundBlock
    mapAfter["mapString"] = mapArray.toString().replace(/,/g, ';')
    mapAfter["collisionString"] = collisionArray.toString().replace(/,/g, '')
    mapAfter["interactions"] = mapObj.interactions

    return mapAfter
}


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




// function changeCursor(): void{
//     mouseLayer.getCtx().fillStyle = "rgba(0,0,0,0.4)"
//     document.addEventListener("mousemove", (event:MouseEvent) => {
//         let mousePosition = getMousePos(event,canvas);
//         mouseLayer.clear()
//         mouseLayer.getCtx().fillRect(mousePosition.x*24,mousePosition.y*24,24,24)
//         updateLayers()
//     })
// }

resetBtn.addEventListener("click", (e:Event) => {
    drawingLayer.clear()
    blocksPlaced = []
    updateLayers()
})

saveBtn.addEventListener("click", async (e:Event) => {
    const map = createMapObject()
    const json = await JSON.stringify({map: map})

    const response = await fetch(serverUrl + "/addmap", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: json
    })
    const responseJson = await response.json()
    const mapIdElem = document.getElementById('map-id') as HTMLElement
    
    mapIdElem.setAttribute("href", serverUrl + '/game?id=' + responseJson.id)
    mapIdElem.innerText = serverUrl + '/game?id=' + responseJson.id
    mapIdElem.style.visibility = "visible"
    console.log(responseJson)
})

canvas.addEventListener("mousedown", (event:MouseEvent) => {
    let {x, y} = getMousePos(event, canvas);

    mouseDown = true

    if(getBrush() === 0){
        drawingLayer.eraseBlock(x,y)
        const blockToEraseIndex = blocksPlaced.findIndex(block => block.getPosition()[0] === x && block.getPosition()[1] === y)
        if(blockToEraseIndex !== -1){
            blocksPlaced.splice(blockToEraseIndex,1)
        }
        updateLayers()
        return
    }


    console.log(blocksPlaced.length)

    const findBlock = blocksPlaced.find(block => block.getPosition()[0] === x && block.getPosition()[1] === y)

    if(findBlock){
        return
    } 

 
    if(getBrush() === 1){
        drawingLayer.drawBlock(selectedBlockId, x, y)
        blocksPlaced.push(new Block(selectedBlockId, x, y))
        updateLayers()
    }
    


})


canvas.addEventListener("mousemove", (event:MouseEvent) => {            
    if(mouseDown == true){
        if(getBrush() === 0){
            let {x, y} = getMousePos(event, canvas);
            console.log('erasing')
            drawingLayer.eraseBlock(x,y)
            const blockToEraseIndex = blocksPlaced.findIndex(block => block.getPosition()[0] === x && block.getPosition()[1] === y)
            if(blockToEraseIndex !== -1){
                blocksPlaced.splice(blockToEraseIndex,1)
            }
            
            updateLayers()
        }
        if(getBrush() === 1){
            let {x, y} = getMousePos(event, canvas);

            const findBlock = blocksPlaced.find(block => block.getPosition()[0] === x && block.getPosition()[1] === y)
            if(findBlock) return
            drawingLayer.drawBlock(selectedBlockId, x, y)
            blocksPlaced.push(new Block(selectedBlockId, x, y))
            updateLayers()
        }
    }
})

document.addEventListener("mouseup", (event:MouseEvent) => {
    mouseDown = false
})

export {updateLayers}
