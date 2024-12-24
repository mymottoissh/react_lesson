import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  
  search = async () => {
    const {keywWordElement: {value: keyWord}} = this
    PubSub.publish('atguigu', {isFirst: false, isLoading: true})
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      const data = await response.json()
      console.log(data)
      PubSub.publish('atguigu', {isLoading: false, users: data.items})
    } catch (error) {
      console.log('error', error)
      PubSub.publish('atiguigu', {isLoading: false, err: error.message})
    }
  }
  
  render() {
    return (
      <section>
        <h3>搜索github用户</h3>
        <div>
          <input type='text' placeholder='输入关键字' ref = {c => this.keywWordElement = c}/>
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
