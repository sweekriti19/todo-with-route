import React, { Component } from 'react'

 class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = { title:'',
        body:''
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
   
    handleChange(e){
        this.setState({
            [e.target.id]:e.target.value
        })
        }

        handleSubmit(e){
            e.preventDefault()
            this.props.addtodo(this.state)
            this.setState({
                title:'',
                body:''
            })
            }

    render() {
        return (
            <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Add title" id="title" type="text" className="validate" onChange={this.handleChange}/>
              </div>
              <div className="input-field col s6">
                <input placeholder="Add body" id="body" type="text" className="validate" onChange={this.handleChange}/>
              </div>
              <button type="submit">Submit</button>
              </div>
              </form>
        )
    }
}

export default Addtodo
