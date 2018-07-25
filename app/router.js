import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Greeter from './Greeter'
import ProInput from './problem_input/input'
import ProFixed from './problem_positionFix/fixed'
import cssScroll from './css_scroll/scroll'

class RouterMap extends Component {
  render () {
    console.log('Hi')
    return (
      <Router>
        <div>
          <Route exact path='/' component={Greeter} />

          {/* input输入框错位问题 */}
          <Route path='/input' component={ProInput} />

          {/* position: fixed 错位问题 */}
          <Route path='/position-fixed' component={ProFixed} />

          {/* css实现滚动条 */}
          <Route path='/scroll' component={cssScroll} />
        </div>
      </Router>
    )
  }
}

export default RouterMap
