import React from 'react';
import PhotoGrid from './PhotoGrid';
import './index.css';
// import { Link } from 'react-router';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Single from './Single';

const Main: React.FC = props => {
  return (
    <div>
      <Router>
        <Link to='/' className='app-name'>
          <h1>Photo Gallery</h1>
        </Link>
        <Route path='/' exact render={() => <PhotoGrid {...props} />} />
        <Route path='/view/:postId' render={p => <Single {...props} {...p} />} />
      </Router>
    </div>
  );
};

export default Main;
