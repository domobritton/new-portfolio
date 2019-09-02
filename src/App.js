import React from 'react';
import { Router } from '@reach/router';
import glamorous from 'glamorous';
import Home from './containers/home';
import About from './containers/about';

const Wrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#15202B',
  height: '100%',
  width: '100vw',
  minHeight: '100vh'
});

// this is used to use netlify serverless functions inside the same repo

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch('/.netlify/functions/' + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick('hello')}>{loading ? 'Loading...' : 'Call Lambda'}</button>
//         <button onClick={this.handleClick('async-dadjoke')}>{loading ? 'Loading...' : 'Call Async Lambda'}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
      {/* <LambdaDemo /> */}
    </Wrapper>
  );
};

export default App;
