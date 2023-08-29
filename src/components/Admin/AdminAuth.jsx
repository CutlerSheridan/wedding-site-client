import { useRef, useState } from 'react';
import './AdminAuth.css';

const AdminAuth = ({ updateJwt }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [secret, setSecret] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errors, setErrors] = useState([]);
  const submitButton = useRef(null);

  const pageName = isSigningUp ? 'Sign up' : 'Log in';

  const swapModals = () => {
    setIsSigningUp(!isSigningUp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch('http://localhost:3000/api/1/auth/login', {
      method: form.method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });
    const parsedResponse = await response.json();
    // console.log('response: ', parsedResponse);
    // console.log('typeof response: ', typeof parsedResponse);
    if (typeof parsedResponse === 'string') {
      setErrors([parsedResponse.split(': ')[1]]);
    }
    updateJwt(parsedResponse);
  };
  const handleSignup = async (e) => {};

  return (
    <>
      <h1>{pageName}</h1>
      <form method="POST" onSubmit={isSigningUp ? handleSignup : handleLogin}>
        <div className="adminAuth-formGroup">
          <label htmlFor="username">Username:</label>
          <input
            className="adminAuth-formControl"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="username"
          />
        </div>
        <div className="adminAuth-formGroup">
          <label htmlFor="password">Password:</label>
          <input
            className="adminAuth-formControl"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
          />
        </div>

        {isSigningUp ? (
          <>
            <div className="adminAuth-formGroup">
              <label htmlFor="confirmedPassword">Confirm Password:</label>
              <input
                className="adminAuth-formControl"
                id="confirmedPassword"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                value={confirmedPassword}
              />
            </div>
            <div className="adminAuth-formGroup">
              <label htmlFor="secret">Secret Passphrase:</label>
              <input
                className="adminAuth-formControl"
                id="secret"
                onChange={(e) => setSecret(e.target.value)}
                value={secret}
              />
            </div>
          </>
        ) : (
          <>
            <ul className="adminAuth-errorsList">
              {errors.map((e) => (
                <li className="adminAuth-error">{e}</li>
              ))}
            </ul>
          </>
        )}

        {isSigningUp ? (
          <button
            ref={submitButton}
            disabled={!username || !password || !confirmedPassword || !secret}
          >
            Submit
          </button>
        ) : (
          <button ref={submitButton} disabled={!username || !password}>
            Submit
          </button>
        )}

        <button
          type="button"
          className="adminAuth-swapModalButton"
          onClick={swapModals}
        >
          {isSigningUp ? 'Log in' : 'Sign up'}
        </button>
      </form>
    </>
  );
};

export default AdminAuth;
