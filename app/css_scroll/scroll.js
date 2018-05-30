import React, {Component} from 'react'
import styles from './scroll.scss'

class cssScroll extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className={styles.box}>
        <div className={styles.content}>
          <p>进行滚动</p>
        </div>
      </div>
    )
  }
}

export default cssScroll
