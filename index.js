
// Lets have a little demo for the MongoTimeStampConvertor
const {ObjectIdToDateTime} = require('./js/MongoTimeStampConvertor');

// Stuff the ObjectID from Mongo here...
const objectId = '5eda762fb9c1355c5fa715a4'

// It wil be output to the console when this code runs...
console.log('ObjectIdToDateTime for ' +objectId+ ' \n' + ObjectIdToDateTime(objectId));
