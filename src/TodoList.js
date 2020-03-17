import React, { Component } from 'react';
import { directive } from '@babel/types';
class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
        <div>
            <div>
            <input/>
            <button>提交</button>
            </div>
            <ul>
                <li>
                    JSPANG
                </li>
            </ul>

        </div>  );
    }
}
 
export default TodoList;