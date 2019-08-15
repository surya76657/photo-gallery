// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../src/actions/actionCreators';
import Main from './components/Main';

function mapStateToProps(state: any) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

// function mapDispatchToProps(dispatch: any) {
//   return bindActionCreators(actionCreators, dispatch);
// }

const App = connect(
  mapStateToProps,
  actionCreators //mapDispatchToPropsFF
)(Main);

export default App;
