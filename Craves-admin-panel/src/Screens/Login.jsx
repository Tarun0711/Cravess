import React, { Component } from 'react';
import "./Login.css";

class Signin extends Component {
  render() {
    return (
      <div className="login">
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="password"
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"

          />
        </form>
        <a className="link" href="/signup">Sign Up</a>
      </div>
    )
  }
}

export default Signin;