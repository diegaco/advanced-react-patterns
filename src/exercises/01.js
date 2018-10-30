// Building the toggle component

import React from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import {Switch} from '../switch'

class Toggle extends React.Component {
  // 🐨 this toggle component is going to need to have state for `on`
  //

  constructor(props) {
    super(props)
    this.state = {on: false}
  }
  // You'll also want a method to handle when the switch is clicked
  // which will update the `on` state and call the `onToggle` prop
  // 💰 this.props.onToggle(this.state.on)
  handleSwitch = () => {
    this.setState(
      // if you need to reference current states then use an updater function
      // otherwise use an Object
      // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
      // Updater function that takes the previous state
      prevState => ({on: !prevState.on}),
      // Callback optional parameter to execute after setState is update
      () => {
        this.props.onToggle(this.state.on)
      },
    )
  }
  render() {
    // 🐨 here you'll want to return the switch with the `on` and `onClick` props
    return <Switch on={this.state.on} onClick={this.handleSwitch} />
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
