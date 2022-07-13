import React from "react";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../util/validator/validator";
import classes from "./Login.module.css";
import errorStyles from "../common/FormsControls/FormsControls.module.css";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/dialogs"} />;
  }
  const onSubmit = (values) => {
    props.loginTC(values);
  };
  return (
    <div className={classes.login}>
      <div className={classes.welcome}>
        <h1>DuralStand</h1>
        <h3>Добро пожаловать!</h3>
      </div>
      <div className={classes.formWrapper}>
        <ReduxFormLogin onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={errorStyles.formSummaryError + " " + classes.error}>
          {error}
        </div>
        <label>
          Email
          {createField("Электронная почта", "email", [required], Input)}
        </label>
        <label>
          Пароль
          {createField("Введите пароль", "password", [required], Input, {
            type: "password",
          })}
        </label>
        <div className={classes.rememberForgot}>
          <label className={classes.checkbox}>
            {createField(null, "rememberMe", null, Input, { type: "checkbox" })}
            Запомнить меня
          </label>
          <a href="./">Забыли пароль?</a>
        </div>
        <div className={classes.buttonWrapper}>
          <button className={"button " + classes.button}>Войти</button>
        </div>
      </form>
      <div className={classes.buttonWrapper}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://social-network.samuraijs.com/signUp"
          className={classes.registration}
        >
          Регистрация
        </a>
      </div>
    </>
  );
};

const ReduxFormLogin = reduxForm({ form: "Login" })(LoginForm);

export default Login;
