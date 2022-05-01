import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LearnState from './LearnState';
import UseReducer from './UseReducer';
import Fetch from './Fetch';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // React.createElement(
  //   'h1', 
  //   {style: {color: 'blue'}},
  //  "Hello World"
  //  )

  // JSX, Babel compiles this to html
  // `npx` is a package runner that is used to create a new React application.

  <>
    <Fetch login={'cat'}/>
    <UseReducer/>
    <LearnState />
    <App authorized={false}/>
    {/* <AppTwo/> */}
  </>
);


function AppTwo() {
  return <h1>This is the second app</h1>
}