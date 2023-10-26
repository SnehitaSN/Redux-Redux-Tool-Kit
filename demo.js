const {createSlice, configureStore} = require("@reduxjs/toolkit")

const initialData = {
    noOfMobiles:4
}
// const initialData2 = {
//     noOfLaptops:5
// }

 const mobileSlice = createSlice({
    name:"mobile",
    initialState:initialData,
    reducers:{
        decrementReducer: (state)=>{
            state.noOfMobiles = state.noOfMobiles-1

        }
    }
})


// const laptopSlice = createSlice({
//     name:"laptop",
//     initialState:initialData2,
//     reducers:{
//         decrementReducer1: (state)=>{
//             state.noOfLaptops = state.noOfLaptops-1

//         }
//     }
// })
const {decrementReducer}= mobileSlice.actions

// const {decrementReducer1} = laptopSlice.actions

const myStore = configureStore({
    reducer:{
        mobiles : mobileSlice.reducer,
        // laptops : laptopSlice.reducer
    }
})

myStore.dispatch(decrementReducer())
console.log(myStore.getState().mobiles)
myStore.dispatch(decrementReducer())
console.log(myStore.getState().mobiles)