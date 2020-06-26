import axios from 'axios'
import { push } from 'connected-react-router';
import { routes } from '../conteiners/Router/router';

const baseURL = 'http://localhost:3003/';

export const loginUser = (user, token) => ({
  type: 'DO_LOGIN',
  payload: {
    user,
    token,
  }
});

export const doLogin = (form) => async dispatch => {
  try {
    const loginResponse = await axios.post(`${baseURL}/users/login`, form);
    const { user, token } = loginResponse.data;

    dispatch(loginUser(user, token));
    dispatch(push(routes.homePage));

  } catch (error) {
    alert(error.response.data.message);
  }
}