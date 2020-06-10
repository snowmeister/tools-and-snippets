


module.exports = {
  ArrayOfFloatsToInts: function(arrIn) {
    if (arrIn) {
      const arrOut = arrIn.forEach(float => {
        return parseInt(float)
      })
      return arrOut;
    } else {
      return []
    }

  }
}