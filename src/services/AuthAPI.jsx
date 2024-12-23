import Parse from "./parseService";

export const currentUser = () => Parse.User.current();

export const ParseAnonymousUser = () => {
  return Parse.AnonymousUtils.logIn();
};

export const userResetPassword = (value) => {
  return Parse.User.requestPasswordReset(value)
    .then((res) => {
      return { success: res };
    })
    .catch((error) => {
      return { error: error };
    });
};

export const userLogin = (email, password) => {
  return Parse.User.logIn(email, password)
    .then((res) => {
      return { success: res };
    })
    .catch((error) => {
      return { error: error };
    });
};

export const userSignup = (email, password) => {
  const user = Parse.User.current();
  user.setEmail(email);
  user.setUsername(email);
  user.setPassword(password);
  return user
    .signUp()
    .then((res) => {
      return { success: res };
    })
    .catch((error) => {
      return { error: error };
    });
};
