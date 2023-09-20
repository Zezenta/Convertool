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
    "feet":{
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
            "english": ["kilometer", "kilometre"],
            "spanish": ["kilómetro", "kilometro"]
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

var text_to_check = "Test text: The golden gate bridge is about 1.7 kilometers long. ";

const measures = JSON.parse(measuresObj); //parses all the units into javascript objects

var preferencesObj = `{
    "language": "english",
    "centimeter": "centimeter",
    "inch": "centimeter",
    "meter": "meter",
    "feet": "meter",
    "yard": "meter",
    "meter": "meter",
    "kilometer": "mile",
    "mile": "kilometer"
}`;

var preferences = JSON.parse(preferencesObj);

var unit_names = []; //array that contains every single name of every single unit in every single language

//this creates the unit_names array, which contains all of the names inside itself
for (const unit in measures) {
    for (const lang in measures[unit].names)
    {
        unit_names.push(...measures[unit].names[lang]) //checks all of the names[] arrays for every single language in the measures object and adds it to the unit_names array
    }
}
console.log(unit_names)

//checking if the words inside a paragraph contain any measure unit
unit_names.sort((a, b) => b.length - a.length); //we sort the names of the unit_names array from the longest to the shortest
const regex_pattern = "\\d+(\\.|,)?\\d*\\s?(" + unit_names.join('|') + ")"; //double slash because javascript escapes its own characters because it is dumb
console.log(regex_pattern)

var matches;
var new_replaced_text;

function check_whole_paragraph(paragraph) //checks the whole paragraph at once for regex matches
{
    const regex = new RegExp(regex_pattern, 'gi'); //apply the regex pattern to the regex object
    console.log(regex)
    new_replaced_text = paragraph.replace(regex, match => convert_to_preferences(match)); //we apply the regex object and replace the matches with the text returned by the convert_to_preferences function 
    console.log(new_replaced_text);
}

check_whole_paragraph(text_to_check);

function convert_to_preferences(text_to_convert)
{
    var args = text_to_convert.split(" "); //we separate the number from the name of the unit
    var value = args[0] //we get the number of the unit
    var unit_text_info = find_unit_by_string(args[1], measures); //we check exactly what unit it is, inside the measures object
    var current_unit = unit_text_info[0];//we get the unit itself
    var current_language = unit_text_info[1]; //we get in which language it is
    var preferred_unit = preferences[current_unit]; //we get the preferred unit based on the current unit (the unit we are going to convert to)

    if(preferred_unit == current_unit) //we check that we are not converting the unit to itself (that would be dumb)
    {
        return text_to_convert;
    }
    else if (preferred_unit != current_unit)
    {
        var returned_string = "";
        var multiplying_ratio = measures[current_unit].convertRatio[preferred_unit]; //we get the convert ratio from the current_unit object and the user preference
        console.log(current_ratio)
    }
}

function find_unit_by_string(inputString, dataStructure) { //we check exactly what unit a string is based on a dataStructure
    for (const unit in dataStructure) { //for every unit in the datastructure
        for (const lang in measures[unit].names) //for every language in the names of said unit
        {
            if(dataStructure[unit].names[lang].includes(inputString)) //if the language array from the names object from the unit object, contains the unit name in the string...
            {
                var language_in_use = lang; //returns the specific language in use
                var returned_array = [unit, language_in_use];
                return returned_array; //position 0 is the unit name, position 1 is the language in use, so we can return the name in the same language
            }
        }
    }
    return console.error("One of the measures detected doesn't have a place in any of the names[] arrays, this is a very rare error."); // Return null if no match is found
}