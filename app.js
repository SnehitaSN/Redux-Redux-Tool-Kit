//Mobile Shop---> 4 Mobiles--> Shopkeeper ---->Customer--->BUY_MOBILE

const Redux = require("redux")
//State
const initialData = {
    noOfMobiles:4
}

//Action
function buyMobile()
{
    {
        type:"BUY_MOBILE"
    }
}

// action:{
//     type:"BUYMOBILE"
// }


//Reducer
const myReducer =(state=initialData,action)=>
{
    if(action.type == "BUY_MOBILE"){
        //Customer really wanted tobuy mobile--->remaining 3 will be updated
        return{
            noOfMobiles: state.noOfMobiles -1
        }
    }

    return state

}

//Redux Store
const SangeetaMobiles  = Redux.createStore(myReducer)

//get inside the store ,we can get the new mobile phone count

SangeetaMobiles.subscribe(function(){
    SangeetaMobiles.getState()
    console.log(SangeetaMobiles.getState())
})

SangeetaMobiles.dispatch(buyMobile())