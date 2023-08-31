const measures = `{
  "meter":{
      "convertRatio": {
          "foot": 3.28084,
          "in": 39.3701,
          "yard": 1.09361
      },
      "regex": ["hello", "Bye"]
  },
  "foot":{
      "convertRatio": {
          "meter": 0.3048,
          "in": 12,
          "yard": 0.333333
      },
      "regex": ["hoola", "chao]
  },
  "kilometer":{
      "convertRatio": {
          "meter": 1000,
          "mile": 0.621371,
          "foot":  3280.84,
          "yard": 1094
      }
  },
  "mile":{
      "convertRatio": {
          "kilometer": 1.609,
          "meter": 1609,
          "foot": 5280,
          "yard": 1760
      }
  },
  "inch":{
      "convertRatio": {
          "centimeter": 2.54,
          "meter": 0.0254,
          "foot": 0.0833333
      }
  }
}`;

const measuresObj = JSON.parse(measures);

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