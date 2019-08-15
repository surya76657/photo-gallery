export default function posts(state: any = [], action: any) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [...state.slice(0, i), { ...state[i], likes: state[i].likes + 1 }, ...state.slice(i + 1)];
    default:
      return state;
  }
}

// a reducer can takes two things
// 1. the actions
// 2. copy of current State

// console.log(state, action);
// return updated state
// console.log('incrementing likes');
// console.log(i, action);
