import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {

    const {users, isFirst, isLoading, err} = this.state

    return (
      <div>
        
      </div>
    )
  }
}
