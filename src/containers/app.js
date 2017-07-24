
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import winResize from 'util/windowResize'
import 'styles/app.scss'
class App extends Component {
  constructor(props) {
    super(props);
    new winResize();
  }

  componentDidMount() {
      sessionStorage.setItem('loginStatus','false');
  }

  render() {
    return (
      <div id="view">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
