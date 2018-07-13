
import React from 'react'
import { connect } from 'react-redux'

@connect(
    state=>state.user
)
class User extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <p>用户中心页</p>
            </div>
        )
    }
}

export default User
