let selectedBrush:number = 1

function changeBrush(_id:number){
    selectedBrush = _id
}

function getBrush():number{
    return selectedBrush
}
export {changeBrush, getBrush}