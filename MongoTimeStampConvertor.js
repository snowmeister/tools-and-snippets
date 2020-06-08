
/**
 * I'm certain there are other and better ways, but this is quick n durty...
 */
// ========
module.exports = {
  ObjectIdToDateTime: function (objectId) {
    // whatever
    const timeStamp = parseInt(objectId.toString().substr(0, 8), 16) * 1000
  return new Date(timeStamp)
  }
};
