// increment
export function increment(index: number) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add comment
export function addComment(postId: number, author: any, comment: any) {
  console.log('adding a comment');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment

export function removeComment(postId: any, index: number) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  };
}
