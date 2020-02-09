import React from 'react'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/tweets')
    .then((results) => {
      console.log(results)
      this.setState({tweets: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render() {
    return (
      <div className='app-main'>
      </div>
    );
  }
}

export default MainContainer