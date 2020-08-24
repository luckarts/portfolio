import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginForm from 'components/shared/Form/UserForm';
import { loginUserRequest } from 'store/user/actions';

const Login = ({ loginUserRequest }) => {
  const [initialState, setState] = useState({
    username: '',
    password: ''
  });
  const onSubmit = (values) => {
    loginUserRequest(values);
  };

  return (
    <>
      <LoginForm initialState={initialState} setState={setState} onSubmit={onSubmit} required />
    </>
  );
};

export default connect(null, { loginUserRequest })(Login);
