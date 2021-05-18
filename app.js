const { printTable } = require('console-table-printer');
const chalk = require('chalk');
const { getInputs } = require('./view');
const { getSide} = require('./view');
const { update_side} = require('./update');


async function app(state,view,update) {
    while (true){
    const {model, currentView} = state;
    const {title, table} = currentView;
    console.clear();
    console.log(title);
    printTable(table);
    const {source}= await getSide(state);
    const sourceModel= update_side(model,source);
    const {temperature,fromScale,toScale}= await getInputs(sourceModel);
    const newState= update(sourceModel,temperature,fromScale,toScale);
    state= {
        ...state,
        model:newState,
        currentView:view(newState)
        }
    }
}

module.exports={
    app
}
