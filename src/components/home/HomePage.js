import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
          <div className="jumbotron">
              <h1>hello</h1>
              <p>this is the home component</p>
              <Link to="about" className="">Link to home</Link>
          </div>
        );
    }
}

export default HomePage;