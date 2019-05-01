import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {addPost} from '../actions/posts'

class AddPost extends Component{
  constructor(){
    super()
    this.state = {title:null, body:null}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addPost(this.state)
  }
  render(){
    return(
      <div className="form-container">
        <h2>Add Post</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" rows="3"  onChange={this.handleChange}/>
          </Form.Group>
          <Button type="submit" variant="outline-primary">Add Post</Button>
        </Form>
      </div>
    )
  }
}

// const mapStateToProps = (state)=>({posts:state.posts})

export default connect(null, {addPost})(AddPost)
