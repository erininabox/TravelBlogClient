import React from "react";
import axios from 'axios';

class SignupPage extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onSubmit = (event) => {
      event.preventDefault();
      axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, {
          username: this.state.username,
          password: this.state.password
        })
        .then((response) => {
          // console.log(response)
          this.props.history.push('/cities')
          console.log(this.props);
        })
        .catch(function (error) {
          console.log(error);
        });
      
    };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="sign-up-form-css">
        <label for="username"><h2>Username:</h2></label>
        <p />
        <input
          className="input-text"
          type="text"
          id="username"
          name="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <br />
        <br />
        <label for="password"><h2>Password:</h2></label>
        <p />
        <input
          className="input-text"
          type="password"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <br />
        <br />
        <input 
            className="submit-button"
            type="submit" 
            value="Sign Up" />
      </form>
    );
  }
}

export default SignupPage;
