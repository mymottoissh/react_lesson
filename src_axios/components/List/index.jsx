import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
    return (
      <div className = 'row'>
        {
            isFirst ? <h2>请输入关键词1</h2> :
            isLoading ? <h2>Loading...</h2> :
            users.map((userObj) => {
                return (
                    <div key = {userObj.id} className='card'>
                        <a ref='noreferrer' href={userObj.html_url} target='_blank'>
                            <img alt='head2_portrait' src = {userObj.avatar_url} style={{width: '100px'}}/>
                        </a>
                        <p className='card-text'>{userObj.login}</p>
                    </div>
                )
            })
        }
      </div>
    )
  }
}
