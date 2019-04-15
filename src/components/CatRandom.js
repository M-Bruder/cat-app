import React, { Component } from "react";
import axios from 'axios';
import '../styles/CatRandom.css';

class CatRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  componentDidMount = () => {
    this.handleClick();
  }

  handleClick = () => {
    axios.get('https://aws.random.cat/meow')
    .then((response) => {
      this.setState({image: response.data.file});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { image } = this.state;
    return (
      <div>
        <div className="btn">
          <button className="btn__cat" onClick={this.handleClick}>Click to get a random cat</button>
        </div>
        <div className="img">
          <img className="img__display" src={image}></img>
          <p>Source: <a href={image}>{image}</a></p>
        </div>
      </div>
    );
  }
}

export default CatRandom;
