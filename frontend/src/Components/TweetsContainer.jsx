import React from 'react'
import ViewTweet from './ViewTweet'

class TweetsContainer extends React.Component {
  render() {
    return(
      <div className='tweetList'>
         {this.props.tweetData.map((data) => {
           return(
               <ViewTweet data={ data } key={ data.id } />
           )
         })}
      </div>
    )
  }
}

export default TweetsContainer
