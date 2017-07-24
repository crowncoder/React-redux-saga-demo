import {LOGIN_SUCCESS} from 'actions/const'
const initialState = {
};

export default function (state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  switch (action.type) {
     case LOGIN_SUCCESS:{
      return Object.assign({}, state, { loginStatus: action.status});
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}