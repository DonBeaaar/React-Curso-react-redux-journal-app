import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { firebase } from "../firebase/firebaseConfig";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  // Para saber si cargó y verificar si está autenticado
  const [cheking, setCheking] = useState(true);

  // Cómo saber si está autenticado o no
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    //Verifica constantemente si está auth ($obs)
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking]);

  if (cheking) {
    return <h1>Espere ...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute isLogged={isLogged} path="/auth" component={AuthRouter} />

          <PrivateRoutes isLogged={isLogged} exact path="/" component={JournalScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
