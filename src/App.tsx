import React from 'react';
import './scss/App.scss';
import Headerr from './components/Headerr';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import BasicExample from './components/BasicExample';
import List from './components/List';
// import Child2 from './components/Child2';
import Example from './components/Example';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  // const title = "Foobar";
  // const [postList , setPostList   = useState([]);
  // constructor(props : IAppProps) {
  //     super(props);
  //     this.state = { someValue: this.props.someDefaultValue };
  // }
  // constructor(props : IAppProps){
  //   super(props);   
  //   this.state = {
  //     data : "Hello World" 
  //   }
  // }

  return (
    <div>
      <div className="container">
        <Headerr />
        <BasicExample />
        <hr />
        <br />
        {/* <Child2 dataFromParent = {this.state.date} /> */}
        <Example name="PhungChiBao"
          age="22"
          school="PTIT"
          address="97 Man Thien"
        />
        <List />
        <ColorBox />
        {/* <PostList/> */}
      </div>
    </div>
  );
};

export default App;
