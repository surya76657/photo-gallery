export default function comments(state: any = [], action: any) {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log({ state });
      return {
        ...state,
        [action.postId]: [...(state[action.postId] || []), { user: action.author, text: action.comment }]
      };
    case 'REMOVE_COMMENT':
      return {
        ...state,
        [action.postId]: [
          ...state[action.postId].slice(0, action.index),
          ...state[action.postId].slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}
