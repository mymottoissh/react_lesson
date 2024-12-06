import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    const {keyWordElement: {value: keyWord}} = this
    this.props.updateAppState({isFirst: false, isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
        response => {
            this.props.updateAppState({isLoading: false, users:response.data.items})
        },
        error => {
            this.props.updateAppState({isLoading: false, err: error.message})
        }
    )
  }

  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron'>搜索github用户</h3>
        <div>
            <input type='text' placeholder='关键词' ref = {c => this.keyWordElement = c}/>
            <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
