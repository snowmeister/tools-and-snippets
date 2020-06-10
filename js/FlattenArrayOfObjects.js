/** Absolutely in no doubt there are other
 * better ways to do this, but right now, this
 * will do...
 */

module.exports = {
  FlattenArrayOfObjects: function(arrIn, key) {
    const arrOut = arrIn.map(item => {
      return item[key];
    })
    return arrOut;
  }
}