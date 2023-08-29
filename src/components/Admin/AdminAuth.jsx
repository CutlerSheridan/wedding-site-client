import { useRef, useState } from 'react';
import './AdminAuth.css';

const AdminAuth = ({ updateJwt }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [secret, setSecret] = useState();
  const [isSigningUp, setIsSigningUp] = useState(false);
  const submitButton = useRef(null);

  const pageName = isSigningUp ? 'Sign up' : 'Log in';

  const swapModals = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <>
      <h1>{pageName}</h1>
      <form>
        <div className="adminAuth-formGroup">
          <label htmlFor="username">Username:</label>
          <input
            className="adminAuth-formControl"
            id="username"
            onChange={setUsername}
            value={username}
          />
        </div>
        <div className="adminAuth-formGroup">
          <label htmlFor="password">Password:</label>
          <input
            className="adminAuth-formControl"
            id="password"
            onChange={setPassword}
            value={password}
          />
        </div>

        {isSigningUp ? (
          <>
            <div className="adminAuth-formGroup">
              <label htmlFor="confirmedPassword">Confirm Password:</label>
              <input
                className="adminAuth-formControl"
                id="confirmedPassword"
                onChange={setConfirmedPassword}
                value={confirmedPassword}
              />
            </div>
            <div className="adminAuth-formGroup">
              <label htmlFor="secret">Secret Passphrase:</label>
              <input
                className="adminAuth-formControl"
                id="secret"
                onChange={setSecret}
                value={secret}
              />
            </div>
          </>
        ) : (
          <></>
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
