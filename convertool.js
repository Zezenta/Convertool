const measures = `{
    "meter":{
        "convertRatio": {
            "foot": 3.28084,
            "in": 39.3701,
            "yard": 1.09361
        },
        "names": {
            "universal": ["m"],
            "english": ["meter"],
            "spanish": ["metro"]
        }
    },
    "foot":{
        "convertRatio": {
            "meter": 0.3048,
            "in": 12,
            "yard": 0.333333
        },
        "names": {
            "universal": ["ft"],
            "english": ["feet", "foot"],
            "spanish": ["pie"]
        }
    },
    "kilometer":{
        "convertRatio": {
            "meter": 1000,
            "mile": 0.621371,
            "foot":  3280.84,
            "yard": 1094
        },
        "names": {
            "universal": ["km"],
            "english": ["kilometer"],
            "spanish": ["kilómetro", "kilometro]
        }
    },
    "mile":{
        "convertRatio": {
            "kilometer": 1.609,
            "meter": 1609,
            "foot": 5280,
            "yard": 1760
        },
        "names": {
            "universal": ["mi"],
            "english": ["mile"],
            "spanish": ["milla"]
        }
    },
    "inch":{
        "convertRatio": {
            "centimeter": 2.54,
            "meter": 0.0254,
            "foot": 0.0833333
        },
        "names": {
            "universal": ["in"],
            "english": ["inch"],
            "spanish": ["pulgada"]
        }
    }
}`;

const measuresObj = JSON.parse(measures);

var unitNames = [];
//Not sure how exactly I should create the regex array, but I'll have to identify each case with the unit of measure that it represents

// Iterate through each key in the object
measuresObj.forEach(function (currentArray) {
    currentArray.forEach(function (currentObj) {
        console.log(currentObj)
    })
});

console.table(unitNames)