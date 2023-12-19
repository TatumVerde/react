import { useState } from 'react';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleForSubmit(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputchange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleForSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputchange(e, 'username')}
          />
        </label>
        <labe>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputchange(e, 'password')}
          />
        </labe>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;
