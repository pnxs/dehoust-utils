"use strict";

var models = require("./tables.js");

function calculateFluidLevel(model, height)
{
    var levels = Object.keys(model);

    //console.log("Height: " + height);
    //console.log("Levels: " + levels);

    var previousLevel = levels[0];
    var modelLevel = null;

    //console.log("Levels length:" + levels.length);

    for(var i = 0; i < levels.length; ++i) {
        var level = levels[i];
        
        if (level >= height) {
            modelLevel = level;
            break;
        }
        
        previousLevel = level;
    }

    if (modelLevel === null) {
        modelLevel = level;
    }

    if (modelLevel == height)
        return model[modelLevel];

    var heightDiff = height - previousLevel;

    var step = modelLevel - previousLevel;
    var volDiff = model[modelLevel] - model[previousLevel];
    var volFact = volDiff / step;

    return model[previousLevel] + heightDiff * volFact;
}

module.exports.models = models;
module.exports.calculateFluidLevel = calculateFluidLevel;
