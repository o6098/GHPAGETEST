export default function reducers (state={
  tweets:[],
  fetching: false,
  fetched:false,
  error: null
},action){
  switch (action.type) {
    case "TWEETS_PENDING":{
      return {...state, fetching:true};
      break;
    }
    case "TWEETS_REJECTED": {
      return {...state, fetching:false, error:action.payload};
      break;
    }
    case "TWEETS_FULFILLED": {
      return {
        ...state,
        fetching:false,
        fetched:true,
        tweets:action.payload
      };
      break;
    }
    case "ADD_TWEETS": {
      return {...state, tweets: action.payload}
    }
  }
  return state;
}
