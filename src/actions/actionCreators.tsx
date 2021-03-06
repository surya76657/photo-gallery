export function increment(index: number) {
  return { type: 'INCREMENT_LIKES', index };
}

export function addComment(postId: number, author: any, comment: any) {
  return { type: 'ADD_COMMENT', postId, author, comment };
}

export function removeComment(postId: any, index: number) {
  return { type: 'REMOVE_COMMENT', postId, index };
}
