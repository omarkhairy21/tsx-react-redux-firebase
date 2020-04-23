import React, { Component, BaseSyntheticEvent } from 'react'
interface CreateProjectState {
  title: string,
  content: string
}
class CreateProject extends Component {
  state: CreateProjectState = {
    title: '',
    content: ''
  }
  handleChange = (e: BaseSyntheticEvent) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
