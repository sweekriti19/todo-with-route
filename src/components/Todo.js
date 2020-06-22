import React, { Component } from 'react'
import axios from 'axios'
import Todolist from './Todolist'
import Addtodo from './Addtodo'
import uuid from 'uuid'
export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {todos:[]};
    
        this.addtodo = this.addtodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);

      }
    componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    this.setState({
       todos:res.data
       
    })
})
    }
  addtodo(todo){
        todo.id=uuid.v4()
        todo.completed=true
       const todos=[...this.state.todos,todo]
       this.setState({
         todos:todos
       })
         }
    deleteTodo(id){
        const todo=this.state.todos.filter(todo=>{
         return(
            todo.id!==id
         )
        }
            )
            this.setState({
                todos:todo
            })
    }
    render() {
        return (
            <div>
           <h1 className="center-align"> Todos</h1>
                   <Todolist todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                   <Addtodo addtodo={this.addtodo}/>
            </div>
        )
    }
}

export default Todo
