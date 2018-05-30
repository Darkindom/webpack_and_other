import React, {Component} from 'react'
import styles from './input.scss'

class ProInput extends Component {
  // 解决 placeholder不垂直居中的问题
  handleFontSize (evt) {
    let input = evt.target
    input.value ? input.classList.add(styles.sizeOld) : input.classList.remove(styles.sizeOld)
  }

  render () {
    return (
      <div className={styles.inputBox}>
        <div>
          <input type='tel' className={styles.input1} placeholder='HeHEhaHA' />
          <input type='tel' className={styles.input2} placeholder='HeHEhaHA' onChange={this.handleFontSize.bind(this)} />
        </div>
      </div>
    )
  }
}

export default ProInput
