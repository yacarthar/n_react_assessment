import React, { useState, useContext } from 'react';

const Login = () => {
  // const user = useContext(UserContext)
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = (evt) => {
    console.log(evt.target.name)
    setValues({...values, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("values: ", values)
  }
  return (
    <div style={{margin: 20}}>
      <form action="" onSubmit={handleSubmit}>
        <input
          style={{margin: 20, display: "block"}}
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleOnChange}
        />
        <input
          style={{margin: 20, display: "block"}}
          name="password"
          type="password" placeholder="password"
          value={values.password}
          onChange={handleOnChange}
        />
        <button
          style={{margin: 20, display: "block"}}
          type="submit"
        >Submit</button>
      </form>
    </div>
  );
};

export default Login;