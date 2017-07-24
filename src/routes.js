
import App from 'containers/app';
import loginContainer from 'containers/routes'
import { message} from 'antd';
const routes = [
  {
    path: '/',
    component: App,
    indexRoute: { component: loginContainer },
    childRoutes: [
       {
        path: 'main',
        getComponent(nextState, cb) {
           require.ensure([], (require) => {
           cb(null, require('./containers/routes/main').default)
         }, 'Main')
        },
        onEnter:(nextState,replace,next)=>{
          if(sessionStorage.getItem("loginStatus")!=='true'){
            message.error('您尚未登录');
            replace('/');
          }
          next();
        }
       }]
  }
];

export default routes;
