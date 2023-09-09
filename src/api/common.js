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
export const queryGood = (params)=>{
    return request({
        url:'/queryGood',
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


export const queryNewsList = ()=>{
    return request({
        url:'/queryNewsList',
    })
}
export const newsDetail = (params)=>{
    return request({
        url:'/newsDetail',
        params
    })
}

export const queryHotGoodList = (params) =>{
    return request({
        url:'/queryHotGoodList',
        params
    })
}
