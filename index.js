


const {arrQueue} = require('./constants')


// Lets have a little demo for the MongoTimeStampConvertor
const {ObjectIdToDateTime} = require('./js/MongoTimeStampConvertor');
const {TimeStampToDate} = require('./js/TimeStampToDate');


// Lets walk over a bunch of jobs and compare the id datetimestamp to the actual job. They should be the same...
arrQueue.forEach(queueItem=>{
  console.log('IDTIME:', ObjectIdToDateTime(queueItem._id), 'JOBTIME:', TimeStampToDate(queueItem.queue))
})

