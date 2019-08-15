import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import Single from './Single';
import './index.css';
const Main: React.FC = props => {
  return (
    <div>
      <Router>
        <Link to='/' className='app-name'>
          <h1>Photo Gallery</h1>
        </Link>
        <Route path='/' exact render={p => <PhotoGrid {...props} {...p} />} />
        <Route path='/view/:postId' render={p => <Single {...props} {...p} />} />
      </Router>
    </div>
  );
};
export default Main;
