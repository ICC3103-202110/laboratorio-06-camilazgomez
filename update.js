function Fahrenheit_to_Celsius(temperature) {
    return ((temperature-32)*(5/9))
}
function Fahrenheit_to_Kelvin(temperature) {
    return ((temperature-32)*(5/9)+273.15)
}
function Celsius_to_Fahrenheit(temperature) {
    return ((temperature*1.8)+32)
}
function Celsius_to_Kelvin(temperature) {
    return (temperature+273.15)
}
function Kelvin_to_Celsius(temperature) {
    return (temperature-273.15)
}

function Kelvin_to_Fahrenheit(temperature) {
    return ((temperature-273.15)*1.8+32)
}

function update_side(model,newSource) {
    return {
        ...model,
        source:newSource
    }
}
function master_of_conversion(temperature,fromScale,toScale){
    if (fromScale==='Kelvin' && toScale==='Celsius' )  {
        return conversion= Kelvin_to_Celsius(temperature);
    }
    if (fromScale==="Kelvin" && toScale==="Fahrenheit" ) {
        return conversion= Kelvin_to_Fahrenheit(temperature);}
    if (fromScale==="Fahrenheit" && toScale==="Celsius") {
        return conversion= Fahrenheit_to_Celsius(temperature);}
    if (fromScale==="Fahrenheit" && toScale==="Kelvin" ) {
        return conversion= Fahrenheit_to_Kelvin(temperature);}
    if (fromScale==="Celsius" && toScale==="Kelvin" ) {
        return conversion= Celsius_to_Kelvin(temperature);}
    if (fromScale==="Celsius" && toScale==="Fahrenheit" ) {
        return conversion= Celsius_to_Fahrenheit(temperature);}
    if (fromScale===toScale) {
        return conversion=temperature;}
}

function update(model,temperature,fromScale,toScale){
    const conversion=master_of_conversion(temperature,fromScale,toScale);
    if (model.source===true){
        return {
            ...model,
            leftValue: temperature,
            leftUnit:fromScale,
            rightValue: conversion,
            rightUnit:toScale,
        }
    }
    
    return {
        ...model,
        leftValue: conversion,
        leftUnit:toScale,
        rightValue:temperature,
        rightUnit:fromScale,
        } 
}

module.exports={
    update_side,
    update
}

