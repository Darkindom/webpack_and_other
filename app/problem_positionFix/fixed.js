import React, {Component} from 'react'
import styles from './fixed.scss'

class ProFixed extends Component {
  render () {
    return (
      <div className={styles.fixBox} >
        <div className={styles.fix} >my position is fixed.</div>
        <div className={styles.fixContent} >my width is overflow.</div>
      </div>
    )
  }
}

export default ProFixed
