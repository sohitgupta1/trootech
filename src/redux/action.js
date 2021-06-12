import { TODO_LIST_DATA, TODO_EDIT } from './actionType'


export const todoListData = (data)=>(
    {
    type:TODO_LIST_DATA,
    payload:data
})

export const todoEditData = (data)=>(
    {
    type:TODO_EDIT,
    payload:data
})


