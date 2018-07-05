import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter, data} = this.props
    return (
      <div>
        <h1>Test Area</h1>
        <h3>Answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="increment"></Button>
        <Button onClick={decrementCounter} color="red" content="decrement"></Button>
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
