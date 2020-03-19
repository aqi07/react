import React, { Component } from 'react';
import store from './store'
import {connect} from 'react-redux'
import { directive } from '@babel/types';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state=store.getState()
    }
    render() {
        return (
        <div>
            <div>
            <button onClick={this.props.inputChange}>添加</button >
            </div>
            <ul>
                <li>
                  <input 
                  value={this.props.count} 
                  />
                  
                </li>
            </ul>

        </div>  );
    }
    //inputChange(e){
    //    console.log(e.target.value)
    //}
}



const stateToProps = (state)=>{
    return {
        count:state.count
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action ={
                type:'add',
                value:e.target.value
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);