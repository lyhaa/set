export default(state={
    // key:""
},action)=>{
    switch(action.type){
        case 'TOGGLEGALLERY':
            return{
                ...state,
                key:action.key,
                name:action.name
            }
        case 'GETSEARCHVALUE':
            return{
                ...state,
                imgs:action.imgs
            }
        default:
            return state
    }
}