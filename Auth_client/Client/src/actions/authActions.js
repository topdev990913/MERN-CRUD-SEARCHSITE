import axios from '../utils/axios';
import authService from '../services/authService';

export const LOGIN_REQUEST = '@account/login-request';
export const LOGIN_SUCCESS = '@account/login-success';
export const LOGIN_FAILURE = '@account/login-failure';
export const REGISTER_REQUEST = '@account/register-request';
export const REGISTER_SUCCESS = '@account/register-success';
export const REGISTER_FAILURE = '@account/register-failure';
export const SILENT_LOGIN = '@account/silent-login';
export const LOGOUT = '@account/logout';
export const REGISTER = '@account/register';
export const UPDATE_PROFILE = '@account/update-profile';

export function login(name, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const user = await authService.loginWithNameAndPassword(name, password);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user
        }
      });
    } catch (error) {
      
      dispatch({ type: LOGIN_FAILURE });
      throw error;
    }
  };
}

export function setUserData(user) {
  return (dispatch) => dispatch({
    type: SILENT_LOGIN,
    payload: {
      user
    }
  });
}

export function logout() {
  return async (dispatch) => {
    authService.logout();

    dispatch({
      type: LOGOUT
    });
  };
}

export function register(firstname, lastname, email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });

      const user = await authService.register(firstname, lastname, email, password);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user
        }
      });
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE });
      throw error;
    }
  };
}

export function updateProfile(update) {
  const request = axios.post('/api/account/profile', { update });
  return (dispatch) => {
    request.then((response) => dispatch({
      type: UPDATE_PROFILE,
      payload: response.data
    }));
  };
}

export function updatePhoto(photo) {
  const formData  = new FormData();
  formData.append('photo', photo);

  const request = axios.post('/api/account/photo', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });

  return (dispatch) => new Promise((resolve, reject) =>{
    request.then((response) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data
      })
      resolve();
    }).catch(err => reject(err))
  });
}


export function removePhoto() {
  const request = axios.delete('/api/account/photo');

  return (dispatch) => new Promise((resolve, reject) =>{
    request.then((response) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data
      })
      resolve();
    }).catch(err => reject(err))
  });
}

export function resetPassword(password) {
  const request = axios.post('/api/account/resetpassword', {password});

  return (dispatch) => new Promise((resolve, reject) =>{
    request.then((response) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data
      })
      resolve();
    }).catch(err => reject(err))
  });
}