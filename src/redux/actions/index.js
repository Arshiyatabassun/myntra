


export  const addItem = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

export const delItem = (product) =>{
    return {
        type:'DELITEM',
        payload:product
    }
}

export const wishlist = (product) =>{
    // console.log('at action',product);
    return {
        type:'WISHLIST',
        payload:product
    }
}

export const delItemFromWish = (product) =>{
    return {
        type:'DELITEM_WISH',
        payload:product
    }
}
