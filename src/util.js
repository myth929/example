


export function getRedirectPath({type,avatar}) {
    // 根据用户信息 返回跳转地址
    // user.type /boss /genius
    // user.acatar /bossinfo /geninusinfo
    let url = (type==='boss')?'/boss':'/genius'
    if (!avatar) {
        url+='info'
    }
    return url
}


export function getChatId(userId,targetId){
    return [userId, targetId].sort().join('_')
}