function Login() {
  function handleForSubmit(event) {
    event.preventDefault();

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleForSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <labe>
          Password:
          <input type="password" name="password" />
        </labe>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;
