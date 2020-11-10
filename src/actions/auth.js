import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoading, startLoading } from "./ui";

//Async
export const startLoginEmailPassword = (email, password) => {
  return async(dispatch) => {
    
    const {user} = await firebase.auth().signInWithEmailAndPassword(email,password);

    dispatch(startLoading());
    dispatch(login(user.uid,user.displayName));
    dispatch(finishLoading());
    
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);
        await user.updateProfile({displayName: name});
        dispatch(login(user.uid,user.displayName));
      })
      .catch(e => console.log(e))
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((userCred) => {
        console.log(userCred);
      });
  };
};

// Este se va a ir al reducer por el types que es '[Auth] login'
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
