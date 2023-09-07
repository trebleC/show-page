import {request} from './request'

export const queryCategoryMap = ()=>{
    return request({
        url:'/queryCategoryMap',
    })
}

export const queryCategoryList = ()=>{
    return request({
        url:'/queryCategoryList',
    })
}

export const queryGoodList = (params)=>{
    return request({
        url:'/queryGoodList',
        params
    })
}


export const saveDemand = (data)=>{
    return request({
        url:'/saveDemand',
        method:'POST',
        data
    })
}