
function ObjectIdToDateTime(objectId){
  const timeStamp = parseInt(objectId.toString().substr(0,8), 16)*1000
  return new Date(timeStamp)
}

const objectId = '5eda762fb9c1355c5fa715a4'

console.log(ObjectIdToDateTime(objectId))