import React, { Component } from 'react'
import axios from 'axios'

class Task extends Component {
    state={
        todo:[]
    }
    componentDidMount(){
      const tid=this.props.match.params.id
      axios.get('https://jsonplaceholder.typicode.com/posts/'+tid).then(res=>{
          this.setState({
              todo:res.data
          })
    }).catch(error=>{
        console.log(error)
    })
    }
    render() {
       const {todo}=this.state
            return(
                <div className="card-panel" key={todo.id}>
                <h4 className="blue-text text-darken-2">{todo.title}</h4>
               <span className="black-text text-darken-2"> {todo.body}</span>
               </div>
            )
        }
       
    }


export default Task
