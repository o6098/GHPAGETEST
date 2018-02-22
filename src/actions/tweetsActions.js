import axios from 'axios';

export function fetchTweets() {
  return (dispatch) => {
    // type: "TWEETS",
    // ajax: true,
    // ajaxParam: {
    //   url: "http://rest.learncode.academy/api/test123/tweets",
    //   type: 'get',
    //   dataType: "json"
    // },
    // callBack(response, dispatch){
    //   dispatch({type: "TWEETS_FULFILLED", payload: response.data});
    // },
    // failCallBack(err, dispatch){
    //   dispatch({type: "TWEETS_REJECTED", payload: err});
    // }
    axios.get("../../data.json")
      .then((response) => {
        dispatch({type: "TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "TWEETS_REJECTED", payload: err})
      })
  };
}

export function addTweet(tweet){
  return {
    type: "ADD_TWEETS",
    payload: tweet
  }
}
