import React,{useContext} from 'react';

export const reducer = (state,action) =>{

// FETCH INITIAL DATA
  var temp = {};
  if (action.type == "FETCH"){
    return{
      ...state,
      productObjects:action.payload,
      originalList:action.payload,
      cartList:action.payload,
      isLoading:false,
    }
  }

// SEARCH
  if (action.type == "SEARCH"){
    let temp = state.originalList.filter((obj)=>{
      if (obj.name.toLowerCase().includes(action.payload) || obj.name.toUpperCase().includes(action.payload) || obj.name.includes(action.payload) ) {
        return obj
      }
    })
    return{
      ...state,
      productObjects:temp,
    }
  }









// FILTERCATEGORY
  if (action.type == "FILTERCATEGORY"){
    if (state.primarySearch == "originalList" || state.primarySearch == "filterList"){
      temp = state.originalList.filter((obj)=>{
        if (obj.category.includes(action.payload)){
          return obj
        }
      })
    }
    else{

      if (state.primarySearch == "brandList"){
        temp = state.brandList.filter((obj)=>{
          if (obj.category.includes(action.payload)){
            return obj
          }
        })
      }

      if (state.primarySearch == "colorList"){
        temp = state.colorList.filter((obj)=>{
          if (obj.category.includes(action.payload)){
            return obj
          }
        })
      }

    }
    if (state.primarySearch == "originalList"){
      state.primarySearch = "filterList";
      state.filterList = temp;
    }

    return{
      ...state,
      productObjects:temp,
    }
  }
// FILTERBRAND
  if (action.type == "FILTERBRAND"){
    if (action.payload == "All"){
      if (state.primarySearch == "originalList"){
        state.productObjects = state.originalList;
      }
      if (state.primarySearch == "filterList"){
        state.productObjects = state.filterList;
      }
      if (state.primarySearch == "brandList"){
        state.productObjects = state.originalList;
        state.primarySearch = "originalList";
      }
      if (state.primarySearch == "colorList"){
        state.productObjects = state.colorList;
      }

      return{
        ...state,
      }
    }
    else{
      if (state.primarySearch == "originalList" || state.primarySearch == "brandList"){
        temp = state.originalList.filter((obj)=>{
          if (obj.brand == action.payload){
            return obj
          }
        })
      }
      else{

        if (state.primarySearch == "filterList"){
          temp = state.filterList.filter((obj)=>{
            if (obj.brand == action.payload){
              return obj
            }
          })
        }

        if (state.primarySearch == "colorList"){
          temp = state.colorList.filter((obj)=>{
            if (obj.brand == action.payload){
              return obj
            }
          })
        }

      }
      if (state.primarySearch == "originalList"){
        state.primarySearch = "brandList";
        state.brandList = temp;
      }
      return{
        ...state,
        productObjects:temp,
      }
    }

  }







// FILTERCOLOR
  if (action.type == "FILTERCOLOR"){
    if (state.primarySearch == "originalList" || state.primarySearch == "colorList"){
      temp = state.originalList.filter((obj)=>{
        if (obj.description.toLowerCase().includes(action.payload)){
          return obj
        }
      })
    }
    else{

      if (state.primarySearch == "filterList"){
        temp = state.filterList.filter((obj)=>{
          if (obj.description.toLowerCase().includes(action.payload)){
            return obj
          }
        })
      }

      if (state.primarySearch == "brandList"){
        temp = state.brandList.filter((obj)=>{
          if (obj.description.toLowerCase().includes(action.payload)){
            return obj
          }
        })
      }

    }
    if (state.primarySearch == "originalList"){
      state.primarySearch = "colorList";
      state.colorList = temp;
    }
    return{
      ...state,
      productObjects:temp,
    }
  }





// CLEAR ALL FILTERCS
  if (action.type == "CLEARALL"){
    return{
      ...state,
      filterList:{},
      primarySearch:"originalList",
      filterList:{},
      brandList:{},
      colorList:{},
      productObjects:state.originalList,
    }
  }
// FILTERCATEGORY ALL
  if (action.type == "FETCHALL"){
    if (state.primarySearch == "originalList"){
      state.productObjects = state.originalList;
    }
    if (state.primarySearch == "filterList"){
      state.productObjects = state.originalList;
      state.primarySearch = "originalList";
    }
    if (state.primarySearch == "brandList"){
      state.productObjects = state.originalList;
    }
    if (state.primarySearch == "colorList"){
      state.productObjects = state.colorList;
    }
    return{
      ...state,
    }
  }


  //CART
  if (action.type == "ADD_ITEM"){

      const temp = state.cartList.filter((obj) => {
          if (obj.id == action.payload.id){
              return obj
          }
      })

      temp.map((obj) => {
          if (obj.id == action.payload.id){
              obj.amount+=action.payload.am;
          }
      })

      if (state.cartItems.includes(temp[0])){
        state.cartItems.map((obj)=>{
          if (obj.id = action.payload.id){
            obj.amount = temp[0].amount
            state.value += temp[0].amount*temp[0].price
          }
        })
      }
      else{
        state.cartItems.push(temp[0]);
        state.value += temp[0].amount*temp[0].price
      }
    // console.log(temp);
    // console.log(action.payload.am)
    // console.log(state.cartList);
    // console.log(state.cartItems);
    localStorage.setItem('cart',JSON.stringify(state.cartItems));
    localStorage.setItem('value',state.value);
    return{
      ...state,
    }
  }

  //cart
  if (action.type == "CLEARCART"){
    const temp = state.cartItems.filter((obj)=>{
      obj.amount = 0;
    })
    state.value = 0;
    localStorage.removeItem('cart');
    localStorage.removeItem('value');
    return{
      ...state,
      cartItems:[],

    }
  }

  if (action.type == "REMOVEITEM"){
    const temp = state.cartItems.filter((obj)=>{
      if (obj.id != action.payload ){
        return obj
      }
      else{
        state.value -= obj.amount*obj.price
        obj.amount = 0;
      }
    })

    localStorage.removeItem('cart');
    localStorage.setItem('value',state.value);
    return{
      ...state,
      cartItems:temp,
    }
  }
  // overwrite
  if (action.type == "ADD_OVERWRITE"){

      const temp = state.cartItems.map((obj) => {
        if (obj.id == action.payload){
          obj.amount +=1
          state.value += obj.price
        }
        return obj
      })
    localStorage.setItem('cart',JSON.stringify(state.cartItems));
    localStorage.setItem('value',state.value);

    return{
      ...state,
      cartItems:temp,
    }
  }

  if (action.type == "SUBTRACT_OVERWRITE"){

      const temp = state.cartItems.map((obj) => {
        if (obj.id == action.payload){
          if (obj.amount > 1){
            obj.amount -=1
            state.value -= obj.price
          }
          return obj
        }
      })
    localStorage.setItem('cart',JSON.stringify(state.cartItems));
    localStorage.setItem('value',state.value);
    return{
      ...state,
      cartItems:temp,
    }
  }
  if(action.type == "LOGOUT"){
    localStorage.removeItem('tokens');
    return{
      ...state,
      localBool:(localStorage.getItem('tokens')? true : false),

    }
  }
  if(action.type == "LOGIN"){
    localStorage.setItem('tokens',JSON.stringify(action.payload));
    state.error = "";
    return{
      ...state,
      localBool:localStorage.getItem('tokens')? true : false,
    }

  }
  if (action.type == "ERRORMESSAGE"){
    state.error = action.payload;
    return {
      ...state,
    }
  }




}
