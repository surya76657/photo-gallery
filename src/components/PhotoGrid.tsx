import React from 'react';
import Photo from './Photo';

const PhotoGrid: React.FC = (props: any) => {
  return (
    <div className='photo-grid'>
      {props.posts.map((post, i) => {
        return <Photo {...props} key={i} post={post} i={i} />;
      })}
    </div>
  );
};

export default PhotoGrid;
