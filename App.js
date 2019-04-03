import React, { Component } from 'react';
import Counter from "./counter.js";
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const InitialState={
  count:30
}
function counterReducer(state=InitialState,action){

   switch(action.type){

    case "INCREMENT": return {
      count:state.count+1

    }
    case "DECREMENT": return {
      count:state.count-1
      
    }
    default:
    {
      return state
    }
   }
   }
  

const store = createStore(counterReducer)
const App =()=>{
  return (
    <Provider store ={store}>
    <Counter/>
    </Provider>
  )
}



export default App;
