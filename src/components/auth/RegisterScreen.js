import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeErrorActions, setErrorActions } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formInput, handleInputChange] = useForm({
    name: "Felipe",
    email: "felipe@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formInput;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorActions("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorActions("Email not valid"));
      return false;
    } else if (password !== password2 || password.length <= 0) {
      dispatch(setErrorActions("Password incorrect"));
      return false;
    }

    dispatch(removeErrorActions());
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // dispatch(startRegisterWithEmailPasswordName(email, password, name));
      dispatch(startRegisterWithEmailPasswordName(email,password,name))
    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
