export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFAilure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});
