
import  React,{Component} from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{


 increment=()=>{
    this.props.dispatch({type:"INCREMENT"})
 }

 decrement=()=>{
    this.props.dispatch({type:"DECREMENT"})
}

 
     render(){
         return(
         
         <div>
             <button onClick={this.increment}>+</button>
           <h3>{this.props.count}</h3>
           <button onClick={this.decrement}>-</button> </div> 
               );
     }
    }
 function mapStateToProps(state){
     return{
         count:state.count
     }
 }

 export default connect(mapStateToProps)(Counter);
