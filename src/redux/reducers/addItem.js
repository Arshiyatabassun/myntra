const addItem = []

const addItems = (state = addItem, action) =>{
    switch (action.type){
        case 'ADDITEM' : return [
            ...state,
            action.payload
        ]
        

        case 'DELITEM' : return state=state.filter((x)=>{
            return x.id !== action.payload.id
        })

        // case 'WISHLIST': 
        // wish.push(action.payload)
        // return wish

        default : return state

    }

}


// export addItems

export default addItems