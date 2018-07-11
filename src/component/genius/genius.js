import React from 'react'
import {connect} from 'react-redux'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'

@connect(
    state=>state.chatuser,
    {getUserList}
)

class Genius extends React.Component{
    componentDidMount(){
        this.props.getUserList('boss')
    }
    render(){
        
        const Header = Card.Header
        const Body = Card.Body
        return (
            <h2>牛人首页，查看boss列表</h2>
        )
    }
}

export default Genius