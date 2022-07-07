let selectedBrush:number = 1

function changeBrush(_id:number):number{
    //default value
    selectedBrush = _id
    return selectedBrush
}
export {changeBrush}