const measuresObj = `{
    "meter":{
        "convertRatio": {
            "foot": 3.28084,
            "in": 39.3701,
            "yard": 1.09361
        },
        "names": {
            "universal": ["m"],
            "english": ["meter", "metre"],
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
            "english": ["kilometer", "kilometre],
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

var text_to_check = "Test text: The golden gate bridge is about 1.7 miles long. ";

const measures = JSON.parse(measuresObj); //parses all the units into javascript objects

var separate_unit_names = []; //array that contains more arrays for the names of each unit of measure

//this creates the separate_unit_names array, which contains more arrays inside itself
for (const key in measures) {
  if (measures.hasOwnProperty(key)) {
    separate_unit_names.push(measures[key].names);
  }
}

var single_array_unit_names = []; //array that contains ALL names of each units of measure
separate_unit_names.forEach(function (currentArray) { //this creates said array from the single_array_unit_names array
    currentArray.forEach(function (currentObj) {
        single_array_unit_names.push(currentObj)
    })
});


//checking if the words inside a paragraph contain any measure unit
single_array_unit_names.sort((a, b) => b.length - a.length);
const regex_pattern = "\\d+(\\.|\\,)?\\d*\\s?(" + single_array_unit_names.join('|') + ")"; //double slash because javascript escapes its own characters because it is dumb
console.log(regex_pattern)

var matches;
var new_replaced_text;

function check_whole_paragraph(paragraph) //checks the whole paragraph at once for regex matches
{
    const regex = new RegExp(regex_pattern, 'gi');
    console.log(regex)
    new_replaced_text = paragraph.replace(regex, match => convert_to_preferences(match));
    console.log(new_replaced_text);
}

check_whole_paragraph(text_to_check);

function convert_to_preferences(text_to_convert)
{
    var args = text_to_convert.split(" ");
    var current_unit_string = args[1]
    var current_unit = findUnitByString(current_unit_string, measures);
    var current_ratio = measures[current_unit].convertRatio.kilometer;
    console.log(current_ratio)
}

function findUnitByString(inputString, dataStructure) {
    for (const unit in dataStructure) {
      if (dataStructure[unit].names.includes(inputString)) {
        return unit;
      }
    }
    return console.error("One of the measures detected doesn't have a place in any of the names[] arrays, this is a very rare error."); // Return null if no match is found
}

function check_words_of_paragraph(paragraph, mainArray) //one by one
{
    const words = paragraph.split(/\s+/);

    for(const word of words)
    {
        for(const subArr of mainArray)
        {
            if(subArr.includes(word))
            {
                console.log("It includes " + word)
                //TAKES THE WORD IN COUNT AND REPLACES IT
            }
        }
    }
    //RETURN NOTHING TO REPLACE
}

//check_words_of_paragraph(text_to_check, separate_unit_names)


//Sometimes the words don't get detected because of periods at the end Example: "mile."
//I want it to check only a selected text by the user
//I'll have to create a "preferences" object, I'll check that later
//the single_array_unit_names seems to be useless I think I'll delete it