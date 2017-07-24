import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from 'components/loginForm'
import action from 'actions/loginAction'
import 'styles/login.scss'
const loginImg=require('images/wechat.png');
class loginContainer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='loginWrapper'>
                <div className='loginBody'>
                <img className='loginImg' src={loginImg} />
                <LoginForm actions={this.props.actions}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  const props = {loginStatus:state.login.loginStatus};
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {'login':action.login};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);

