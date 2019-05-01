import {createStore, combineReducers, applyMiddleware} from 'redux'
import posts from './reducers/posts'
import thunk from 'redux-thunk'

const middleware = [thunk]
export const initialState = {
  posts:[]
}
 
const reducers = combineReducers({posts})
const store = createStore(reducers, initialState, applyMiddleware(...middleware))

export default store
