module.exports = function (src) {
  if (!src) {
    return ''
  }
  var result = src.charAt(0).toUpperCase() + src.slice(1)
  return result
}
