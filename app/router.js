import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Greeter from './Greeter'
import ProInput from './problem_input/input'
import ProFixed from './problem_positionFix/fixed'
import cssScroll from './css_scroll/scroll'
import testPage from './test_page'

class RouterMap extends Component {
  render () {
    console.log('hello')
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

          {/* 试验田 */}
          <Route path='/test' component={testPage} />
        </div>
      </Router>
    )
  }
}

export default RouterMap
