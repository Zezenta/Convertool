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


//Not sure how exactly I should create the regex array, but I'll have to identify each case with the unit of measure that it represents

// Iterate through each key in the object
for (const key in measuresObj) {
  if (measuresObj.hasOwnProperty(key)) {
    const regexArray = measuresObj[key].regex;
    
    if (regexArray && Array.isArray(regexArray)) {
      console.log(`Regex array for "${key}":`, regexArray);
      
      // You can perform additional operations on the regexArray here
    }
  }
}

console.log(regexArray)