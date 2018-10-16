// var config = require('./config.json')

// module.exports = function () {
//   var greet = document.createElement('div')
//   greet.textContent = config.greetText
//   return greet
// }

import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.scss'

class Greeter extends Component {
  render () {
    // 获取txt内容，会去调用自己写的 txt-loader
    const text = require('./reverse.txt')
    console.log(text)

    var a = [1, 11, 10, 111, 100, 110, 2, 30, 44, 211, 100, 31]
    var b = ['a', 'aa', 'ab', 'b', 'bb', 'ba', 'cc', 'c', 'abc', 'cab', 'bac', 'aaaa', 'bbc']

    function sortDk (a, b) {
      // if (a > b) {
      //   return 1
      // } else if (a < b) {
      //   return -1
      // } else {
      //   return 0
      // }
      return a - b
    }

    console.log(a.sort(sortDk))
    console.log(b.length)
    console.log(b.sort(sortDk))

    return (
      <div className={styles.root}>
        {config.greetText}
        <div className={styles.cssOrder}>
          <p id={styles.idP}>the color by id</p>
          <p className={styles.classP}>the color by class</p>
          <p>the color without id or class</p>
        </div>
      </div>
    )
  }
}

export default Greeter
