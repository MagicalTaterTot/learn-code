import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><code>var LearnCode</code></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/python">Python</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
