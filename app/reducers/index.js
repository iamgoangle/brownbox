import { combineReducers } from 'redux'

import StickersShopReducer from './StickersShopReducer'
import TodoReducer from './ToDoReducer'
import ItemDetailReducer from './ItemDetailReducer'

export default combineReducers({
  StickersShopReducer,
  TodoReducer,
  ItemDetailReducer
})
