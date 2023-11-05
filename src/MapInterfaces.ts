interface Structure{
    id:number
    x:number
    y:number
    c:boolean
}

interface Portal{
    x:number
    y:number
    to:number
}

interface Interactions{
    portals: Portal[]
}

interface MapBefore{
    backgroundBlock:number
    structures: Structure[],
    interactions: any[]
}

interface MapAfter{
    backgroundBlockId:number
    mapString: string,
    collisionString: string
    interactions: any
}

export {MapAfter, MapBefore, Structure, Portal, Interactions}