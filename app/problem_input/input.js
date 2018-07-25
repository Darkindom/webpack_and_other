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
          <input type='tel' className={styles.input1} placeholder='normal' />
          <input type='tel' className={styles.input2} placeholder='::plcaeholder (blue)' onChange={this.handleFontSize.bind(this)} />
          <input type='tel' className={styles.input3} placeholder='::plcaeholder blue and :placeholder-shown red' />
          <input type='tel' className={styles.input4} placeholder=':plcaeholder-shown red' />
        </div>
      </div>
    )
  }
}

export default ProInput
