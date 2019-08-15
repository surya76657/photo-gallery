import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo: React.FC = (props: any) => {
  const { post, i, comments, increment } = props;
  const { likes = 0, code = '', caption = '', display_src = '' } = post;
  return (
    <figure className='grid-figure'>
      <div className='grid-phot-wrap'>
        <Link to={`/view/${code}`}>
          <img src={display_src} alt={caption} className='grid-photo' />
        </Link>
        <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <span key={i} className='likes-heart'>
            {likes}
          </span>
        </CSSTransitionGroup>
        <figcaption>
          <p>{caption}</p>
          <div className='control-buttons'>
            <button onClick={() => increment(i)} className='likes'>
              &hearts; {likes}
            </button>
            <Link className='button' to={`/view/${code}`}>
              <span className='comment-count'>
                <span className='speech-bubble' />
                <span style={{ paddingLeft: '5px' }}>
                  {comments && code && comments[code] ? comments[code].length : 0}
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
