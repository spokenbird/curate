import React, { Component } from "react";
import axios from 'axios';
import './App.css';

const BASE_URL = 'http://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
    this.copyText = this.copyText.bind(this);
  }

  async componentDidMount() {
    // Call the token from the backend API endpoint.
    const tokenReq = await axios.get(`${BASE_URL}/api/token`);
    const token = tokenReq.data.access_token;
    this.setState({ token });

    // Initiate Tooltips in Bootstrap
    window.$('[data-toggle="tooltip"]').tooltip();
    // Switch copy text on click
    window.$('[data-toggle="tooltip"]').click(function(){
      window.$(this).attr('data-original-title', 'Text copied!');
      window.$(this).tooltip('show');
    });
  }

  copyText(evt) {
    const range = document.createRange();
    range.selectNode(evt.target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }

  render() {
    return (
        <div className="app container-fluid p-0 text-light">
          <div className="container">
            <h2 className="primary">Thank you for using</h2>
            <h2 className="display-2 mb-5">
              <span className="highlight">R</span>eact
              <span className="highlight">E</span>xpress
              <span className="highlight">S</span>potify</h2>
            <h2 className="primary mt-5">Your access token is</h2>
            <p className="secondary token mt-3">
              <span data-toggle="tooltip" data-placement="bottom" title="Copy token to clipboard." onClick={this.copyText}>
                {this.state.token} <i className="far fa-copy ml-2"></i>
              </span>
            </p>
          </div>
        </div>
    );
  }
}

export default App;
