import {initialState} from '../store'

const posts = (state = initialState, action)=>{
  if (action.type === 'FETCH_POST') {
    return action.status = 200 ? (action.payload) : []
  }
  if (action.type === 'ADD_POST') return action.status = 200 ? [...state, action.payload] : state
  if (action.type === 'DELETE_POST') return action.status = 200 ? state.filter(record=>record._id !== action.payload) : state
  if (action.type === 'UPDATE_POST') return action.status = 200 ? state : state
  return state
}

export default posts
