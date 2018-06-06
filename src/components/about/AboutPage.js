import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>About</h1>
                <p>this is the home component</p>
                <Link to="about" className="">Link to home</Link>
            </div>
        );
    }
}

export default AboutPage;