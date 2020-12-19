import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import logo from '../../img/logo.png'
import"./styles.css"

export const Login = () => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (error === 'Invalid credentials') {
      // setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      // setAlert('Please enter all fields', 'danger');
    } else {
      login(user);
    }
  };

  if (isAuthenticated) return <Redirect to='/' />;

  return (
    <div className='row auth-screen'>
      <div className="col-1 col-sm-1 col-md-2 col-lg-2">
      </div>
      <div className="col-10 col-sm-10 col-md-3 col-lg-3 my-auto">
        <a className="navbar-brand login-navbar" href="/">
          <img src={logo} height="20" className="d-inline-block align-top" alt="" />
        </a>
        <div>
          <h4 className="mb-4 mt-1 login-title">Вітаємо в системі Хомо</h4>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Логін</label>
              <input
                name="email"
                required
                className="form-control"
                value={email}
                onChange={onChange}
                placeholder="Введіть логін"
                type="email" />
            </div>
            <div className="form-group">
              <a className="float-right" href="#">Забули пароль?</a>
              <label>Пароль</label>
              <input
                className="form-control"
                placeholder="Введіть пароль"
                type="password"
                name="password"
                required
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label> <input id="rememberPass" type="checkbox" /> Запам'ятати пароль</label>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block"> Увійти </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-2 col-lg-2"></div>
      <div className="col-12 col-sm-12 col-md-5 col-lg-5 w-50"></div>
    </div>
  )
}
