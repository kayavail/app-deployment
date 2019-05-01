import axios from 'axios'

 export const getPosts = () => dispatch=>{
    // axios.get('https://jsonplaceholder.typicode.com/posts/')
    axios.get('/api/posts')
    .then(res=>dispatch({
      type:'FETCH_POST',
      payload:res.data,
      status:res.status
    })
  )
    .catch((err) => {console.log('fetch error',err)})
}

export const addPost = (data) => dispatch=>{
   axios.post('/api/post', data)
   .then(res=>dispatch({
     type:'ADD_POST',
     payload:res.data,
     status:res.status
   })
 )
  .catch((err) => {console.log('add error',err)})
}

export const deletePost = (id) => dispatch=>{
   axios.delete(`/api/post/${id}`)
   .then(res=>dispatch({
     type:'DELETE_POST',
     payload:id,
     status:res.status
   })
 )
  .catch((err) => {console.log('delete error',err)})
}

export const updatePost = (data) => dispatch=>{
   axios.put(`/api/post/`, data)
   .then(res=>dispatch({
     type:'UPDATE_POST',
     payload:data,
     status:res.status
   })
 )
  .catch((err) => {console.log('delete error',err)})
}

export default null
