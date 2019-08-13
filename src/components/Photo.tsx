import React from 'react';
// import Link from 'react-router';
import { Link } from 'react-router-dom';

import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo: React.FC = (props: any) => {
  const { post, i, comments } = props;
  // console.log(props);
  return (
    <figure className='grid-figure'>
      <div className='grid-phot-wrap'>
        <Link to={`/view/${post.code}`}>
          {/* {post.caption} */}
          <img src={post.display_src} alt={post.caption} className='grid-photo' />
        </Link>

        <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <span key={i} className='likes-heart'>
            {(post && post.likes) || 0}
          </span>
        </CSSTransitionGroup>
        <figcaption>
          <p>{(post && post.caption) || ''}</p>
          <div className='control-buttons'>
            <button onClick={props.increment.bind(null, i)} className='likes'>
              {' '}
              &hearts; {(post && post.likes) || 0}
            </button>
            <Link className='button' to={`/view/${post.code}`}>
              <span className='comment-count'>
                <span className='speech-bubble' />
                <span style={{ paddingLeft: '5px' }}>
                  {comments && post && comments[post.code] ? comments[post.code].length : 0}
                </span>
              </span>
            </Link>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Photo;
