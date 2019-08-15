import { createStore
  // , compose
} from 'redux';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = { posts, comments };
// const enhancer = compose(window.devToolsExtension ? window.devToolsExtension() : (f) => (f))

const store = createStore(rootReducer, defaultState
    // , enhancer
);

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   })
// }

export default store;
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

// import the root reducer
// export const history = syncHistoryWithStore(browserHistory, store);