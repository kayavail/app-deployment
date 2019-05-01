import React, {Component} from 'react'
import AddPost from './AddPost'
import Posts from './Posts'
import {Row, Col} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

class Home extends Component{
  render(){
    return (
      <div>
        <Row>
          <Col>
            <AddPost/>
          </Col>
          <Col>
            <Posts/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
