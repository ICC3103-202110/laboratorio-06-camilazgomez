
/*function update(model,newBill,newPercent){
    const newTip=update_tip(newBill,newPercent);
    const newTotal=update_total(newBill,newTip);
    return {
        ...model,
        bill: newBill,
        percent:newPercent,
        tip:newTip,
        total:newTotal
    }
}*/

function update_side(model,newSource) {
    return {
        ...model,
        source:newSource
    }
}

module.exports={
    update_side,
    //update
}