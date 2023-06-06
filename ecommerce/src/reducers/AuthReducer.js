export const authReducer = (stateAuth, actionAuth) => {
    switch (actionAuth.type) {
      case "GET_USER_DETAILS":
        console.log("Action auth here",actionAuth.payload)
        return { ...stateAuth, userDetails: [actionAuth.payload], isAuth: true };
  
      case "USER_LOGOUT":
        return { ...stateAuth, userDetails: [], isAuth: false };
  
      default:
        return stateAuth;
    }
  };