"use strict"

const R = require("ramda");

//find any unpopulated mongodb properties, these will be represented by mongoDB objectIds which is a string of 24 alphanumeric characters. This will match for anything that doesn"t match that description or is not of type string
const findUnpopulated = prop => {
  return (R.type(prop) !== "String" || prop.match(/^[a-z0-9]{24}$/) === null)
}

//Search through an array and strip out unpoplulated mongodbIDs, use recurrsion to search for items n deep in the data structure
const removeUnpopulatedProps = data => {
    const output = R.map(item => {
      const stripUnwantedValues = R.pipe(
        R.keys,
        R.reduce((acc, key) => {
          if (key === "id") acc[key] = item[key];
          if (key === "suitability") acc[key] = output(item[key]);
          if (key !== "suitability" && findUnpopulated(item[key])) acc[key] = item[key];
          return acc;
        }, {})
        )
      return stripUnwantedValues(item)
    });
    return output(data)
}

module.exports = {
	findUnpopulated,
  removeUnpopulatedProps
}

