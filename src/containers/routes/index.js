import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from 'components/loginForm'
import action from 'actions/loginAction'
import indexStyle from 'styles/login.scss'

const loginImg=require('images/wechat.png');
class loginContainer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            
            <div className={indexStyle.loginWrapper}>
                <div className={indexStyle.loginBody}>
                <img className={indexStyle.loginImg} src={loginImg} />
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

