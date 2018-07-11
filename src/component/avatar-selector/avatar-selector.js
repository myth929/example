import React from 'react'
import { Grid,List } from 'antd-mobile';
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
    static PropTypes = {
        selectAvatar:PropTypes.func.isRequired
    }

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        const avatarList = 'Chino,Megumi,Remilia,Yuyuko,Chitoge'
                            .split(',')
                            .map(v=>({
                                icon:require(`../img/${v}.jpg`),
                                text:v
                            }))
        const gridHeader = this.state.text
                            ?(<div>
                                <span>已选择头像</span>
                                <img style={{width:20}} src={this.state.icon} alt=""/>
                            </div>)
                            :'请选择头像'
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    />
                </List>
              
            </div>
        )
    }
}

export default AvatarSelector