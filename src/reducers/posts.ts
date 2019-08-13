// a reducer can takes two things
// 1. the actions
// 2. copy of current State

function posts(state: any = [], action: any) {
  // console.log(state, action);
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [...state.slice(0, i), { ...state[i], likes: state[i].likes + 1 }, ...state.slice(i + 1)];
    // return updated state
    // console.log('incrementing likes');
    // console.log(i, action);

    default:
      return state;
  }
}

export default posts;
