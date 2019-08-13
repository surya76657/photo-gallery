import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

const Single: React.FC = (props: any) => {
  const { postId } = props.match.params;
  const i = props.posts.findIndex((post: any) => post.code === postId);
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];
  return (
    <div className='single-photo'>
      <Photo i={i} post={post} {...props} />
      <Comment postComments={postComments} {...props} />
    </div>
  );
};

export default Single;
