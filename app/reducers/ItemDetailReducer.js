export default function reducer(state={
  value:1
}, action){
  switch (action.type){
    case "SELECT_SIZE" : {
      return Object.assign({}, state, {
        value : action.value
      })

      //{...state, fetching: true}
    }
    case "FETCH_STICKERS_FULLFILLED" :{
      return Object.assign({}, state, {
        stickers: action.payload,
        fetching:false,
      })

      // {
      //   ...state,
      //   fetching:false,
      //   stickers: action.payload,
      // }
    }
    default : {
      return state;
    }
  }
}
