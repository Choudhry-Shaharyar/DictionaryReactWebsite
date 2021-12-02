import logo from './logo.svg';
import './App.css';
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";
import { Entry } from "./Components/Entry/Entry";
import React from 'react';
import Axios from "axios";
import axios from 'axios';

// to run the app, in the bash terminal, type ls(must match directory of json), then npm start

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      word: "",
      wordObject: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }

  // creating a method onSubmit
  onSubmit(e) {
    e.preventDefault();
    const word = this.state.word;

    axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word).
    then((res) => {
      const data = res.data[0];

      this.setState({
        wordObject: data,
      });

    });
  }

  handleInputChange(event){
    const target = event.target;
    //console.log(target,)
    this.setState({
      word: target.value,
    });
  }

  // ls, npm install axios
  render() {
    let content;

    if(this.state.wordObject === null){
      content = <div></div>;
    } else{
      content = <Entry wordObject = {this.state.wordObject} />;
    }
    




    return (
      <div className="App">
      <Header />
      <Form
       onSubmit={this.onSubmit} 
       word = {this.state.word} 
       onChange={this.handleInputChange}
       />
      {content}
      </div>
    )
  }
} 

export default App;
