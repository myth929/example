import React from 'react'
import { NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'


@connect(
    state=>state.user,
    {update}
)


class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            desc:'',
            company:'',
            money:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }

    render(){
        const path = this.props.location.pathname
        const redire = this.props.redirectTo
        return (
            <div>
                {redire&&redire!==path? <Redirect to={this.props.redirectTo} />:null}
                <NavBar mode = "dark">俱乐部信息完善页面</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname)=>{
                        this.setState({
                            avatar:imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={v=>this.onChange('title',v)}>
                    位置需求
                </InputItem>
                <InputItem onChange={v=>this.onChange('company',v)}>
                    俱乐部名称
                </InputItem>
                <InputItem onChange={v=>this.onChange('money',v)}>
                    薪资
                </InputItem>
                <TextareaItem 
                    onChange={v=>this.onChange('desc',v)}
                    rows = {3}
                    autoHeight
                    title = '其他要求'
                >
                </TextareaItem>
                <Button 
                    onClick={()=>{
                        this.props.update(this.state)
                    }}
                type='primary'>保存</Button>
            </div>
        )
    }
}

export default BossInfo