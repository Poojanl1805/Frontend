import React, { useState } from 'react';

const authenticateUser = async (username, password) => {
  // Simulate authentication logic
  // Replace this with your actual authentication API call
  if (username === 'user' && password === 'password') {
    return { success: true, user: { username } };
  } else {
    return { success: false, error: 'Invalid credentials' };
  }
};

const registerUser = async (username, password) => {
  // Simulate registration logic
  // Replace this with your actual registration API call
  return { success: true, user: { username } };
};

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authResponse = await authenticateUser(username, password);

    if (authResponse.success) {
      console.log('User authenticated:', authResponse.user);
      // Perform actions after successful authentication (e.g., redirect)
    } else {
      console.error('Authentication failed:', authResponse.error);
      // Handle authentication error (e.g., display error message)
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const registerResponse = await registerUser(username, password);

    if (registerResponse.success) {
      console.log('User registered:', registerResponse.user);
      // Perform actions after successful registration (e.g., display success message)
    } else {
      console.error('Registration failed:', registerResponse.error);
      // Handle registration error (e.g., display error message)
    }
  };

  return (
    <div className="login-form">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={isLogin ? handleSubmit : handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
