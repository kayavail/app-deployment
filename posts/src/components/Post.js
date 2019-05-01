import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts, updatePost} from '../actions/posts'
import {Row, Col, Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Post extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount(){
    this.props.getPosts()
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    const data = {
      id:document.forms.updatePost.id.value,
      title:document.forms.updatePost.title.value,
      body:document.forms.updatePost.body.value
    }
    this.props.updatePost(data)
    this.props.history.push('/')
  }
  render(){
    let noPost = true;
    let form = this.props.posts.map((post, key)=>{
      if (post._id === this.props.match.params.id) {
        noPost = false
        return(
          <React.Fragment key={key}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" defaultValue={`${post.title}`} onChange={this.handleChange}/>
            </Form.Group>
            <input type="hidden" defaultValue={`${post._id}`} id="id"/>
            <Form.Group controlId="body">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" defaultValue={`${post.body}`} rows="3"  onChange={this.handleChange}/>
            </Form.Group>
            <Button type="submit" variant="outline-primary">Update Post</Button>
          </React.Fragment>
        )
      }
    })
    if (noPost) form = <h4 className="text-center">No record for this ID</h4>
    return(
      <div className="form-container">
        <Row>
          <Col sm="1" md="auto">
            <Link to="/">Home</Link>
          </Col>
          <Col sm={{ span: 5, offset: 3 }}>
            <h2>Update Post </h2>
            <Form onSubmit={this.handleSubmit} name="updatePost">
            {form}
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({posts:state.posts})

export default connect(mapStateToProps, {updatePost, getPosts})(Post)
