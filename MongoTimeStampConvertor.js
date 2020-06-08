
/**
 * I'm certain there are other and better ways, but this is quick n durty...
 */

function ObjectIdToDateTime(objectId) {
  const timeStamp = parseInt(objectId.toString().substr(0, 8), 16) * 1000
  return new Date(timeStamp)
}

// Stuff the ObjectID from Mongo here...
const objectId = '5eda762fb9c1355c5fa715a4'

// It wil be output to the console when this code runs...
console.log(ObjectIdToDateTime(objectId))