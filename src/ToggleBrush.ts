let selectedBrush:number = 1

function changeBrush(_id:number):number{

    selectedBrush = _id
    return selectedBrush
}

function getBrush():number{
    return selectedBrush
}
export {changeBrush, getBrush}