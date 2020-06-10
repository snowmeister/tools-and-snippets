


const {arrQueue, objectId, objectId2, arrOrgIdsFomMongo} = require('./constants')


console.log('arrOrgIdsFomMongo', JSON.stringify(arrOrgIdsFomMongo))
// Lets have a little demo for the MongoTimeStampConvertor
const {ObjectIdToDateTime} = require('./js/MongoTimeStampConvertor');

console.log('\nObjectIdToDateTime for ' +objectId+ ' \n' + ObjectIdToDateTime(objectId));
console.log('\n\nObjectIdToDateTime for ' +objectId2+ ' \n' + ObjectIdToDateTime(objectId2))
// and lets flatten the array...
const {FlattenArrayOfObjects}  = require('./js/FlattenArrayOfObjects');
// lets be able to convert the array from floats to ints...
const {ArrayOfFloatsToInts}  = require('./js/ArrayOfFloatsToInts');

console.log( JSON.stringify(FlattenArrayOfObjects(arrQueue, 'queue')));
