import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Todolist extends Component {
    render() {
        const Todolist=this.props.todos.length?(
            this.props.todos.map(todo=>{
                return(
                    <div className="card-panel" key={todo.id}>
                    <Link to={'/'+ todo.id} >
                    <h4>{todo.title}</h4>
                    </Link>
                   <span className="black-text text-darken-2"  onClick={()=>this.props.deleteTodo(todo.id)} > {todo.body}</span>
                   </div>
                )
            })
        ):
        (
            <p className="card-panel">No task left</p>
        )
        return (
            <div>
                {Todolist}
            </div>
        )
    }
}

export default Todolist
