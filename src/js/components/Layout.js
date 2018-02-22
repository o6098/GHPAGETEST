import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userAction'
import { fetchTweets } from '../actions/tweetsActions'

class Layout extends React.Component{
  componentWillMount(){
    this.props.dispatch(fetchUser());
  }

  fetchTweets(){
    this.props.dispatch(fetchTweets());
  }
  render(){

    if(!this.props.tweets.length){
      return (
        <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
      )
    }

    const mappedTweets = this.props.tweets.map(tweet =>
      <li key={tweet.id}>{tweet.tweets}</li>)

    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <ul>{mappedTweets}</ul>
      </div>
    );
  }
}

function mapStateToProps(store){
  return {
    user: store.user.user,
    tweets: store.tweets.tweets
  };
}

export default connect(mapStateToProps)(Layout);
