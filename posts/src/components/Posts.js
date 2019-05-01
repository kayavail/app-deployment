import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts, deletePost} from '../actions/posts'
import {Table, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Posts extends Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount(){
    this.props.getPosts()
  }
  handleClick = (e) =>{
    this.props.deletePost(e.target.value)
  }
  render(){
    var id = 0;
    const posts = this.props.posts.map((post, key)=>{
      id++
      return(
        <tr key={key}>
          <td>{id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>
            <Button variant="outline-warning" size="sm">
              <Link to={`/post/${post._id}`}>Edit</Link>
            </Button>
          </td>
          <td><Button variant="outline-danger" size="sm" value={`${post._id}`} onClick={this.handleClick}>delete</Button></td>
        </tr>
      )
    })
    return(
      <div>
        <h2>Posts</h2>
        <Table className="table-bordered">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {posts}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({posts:state.posts})

export default connect(mapStateToProps, {getPosts, deletePost})(Posts)
