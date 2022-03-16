
const wish = []

const wishedItems=(state=wish, action)=>{
    switch(action.type){
        case 'WISHLIST':
            return [...state, action.payload]

            case 'DELITEM_WISH' : return state=state.filter((x)=>{
                return x.id !== action.payload.id
            })
    
        default : return state
    }
}

export default wishedItems