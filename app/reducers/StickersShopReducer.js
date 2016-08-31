export default function reducer(state={
  stickers:{name:'init'}
}, action){
  switch (action.type){
    case "FETCH_STICKERS" : {
      return
      Object.assign({}, state, {
        fetching:true,
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
