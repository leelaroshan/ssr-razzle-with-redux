
const initialState = {
       products:[]
}
  



export const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload }
        default:
            return state
    }
}



// export const selectProductReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'SELECTED_PRODUCT':
//       return { ...state,  ...payload };
//     default:
//       return state;
//   }
// };