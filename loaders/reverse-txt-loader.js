module.exports = function (src) {
  var result = src.split('').reverse().join('')
  return `module.exports = '${result}'`
}
