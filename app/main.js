// const greeter = require('./Greeter')
// document.querySelector('#root').appendChild(greeter())

import React from 'react'
import {render} from 'react-dom'
import RouterMap from './router'
import './main.scss'

render(
  <RouterMap />,
  document.getElementById('root')
)
