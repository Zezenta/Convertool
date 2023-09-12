const measures = `{
    "meter":{
        "convertRatio": {
            "foot": 3.28084,
            "in": 39.3701,
            "yard": 1.09361
        },
        "names": ["meter", "mtr", "m", "metro"]
    },
    "foot":{
        "convertRatio": {
            "meter": 0.3048,
            "in": 12,
            "yard": 0.333333
        },
        "names": ["foot", "feet", "ft", "pie"]
    },
    "kilometer":{
        "convertRatio": {
            "meter": 1000,
            "mile": 0.621371,
            "foot":  3280.84,
            "yard": 1094
        },
        "names": ["kilometer", "kilometre", "km", "kilometro", "kilómetro"]
    },
    "mile":{
        "convertRatio": {
            "kilometer": 1.609,
            "meter": 1609,
            "foot": 5280,
            "yard": 1760
        },
        "names": ["mile", "mi", "milla"]
    },
    "inch":{
        "convertRatio": {
            "centimeter": 2.54,
            "meter": 0.0254,
            "foot": 0.0833333
        },
        "names": ["inch", "in", "pulgada"]
    }
}`;

const measuresObj = JSON.parse(measures);

var separate_unit_names = [];
var single_array_unit_names = [];
//Not sure how exactly I should create the regex array, but I'll have to identify each case with the unit of measure that it represents

//this creates the separate_unit_names array, which contains more arrays inside itself
for (const key in measuresObj) {
  if (measuresObj.hasOwnProperty(key)) {
    separate_unit_names.push(measuresObj[key].names);
  }
}

//this creates the single_array_unit_names, which is just a big array
separate_unit_names.forEach(function (currentArray) {
    currentArray.forEach(function (currentObj) {
        single_array_unit_names.push(currentObj)
    })
});

console.log(single_array_unit_names);
console.table(separate_unit_names);


//checking if the words inside a paragraph contain any measure unit
function check_words_of_paragraph(paragraph, mainArray)
{
    const words = paragraph.split(/\s+/);

    for(const word of words)
    {
        for(const subArr of mainArray)
        {
            if(subArr.includes(word))
            {
                //TAKES THE WORD IN COUNT AND REPLACES IT
            }
        }
    }
    //RETURN NOTHING TO REPLACE
}