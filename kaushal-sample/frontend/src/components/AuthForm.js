import React, { useState } from 'react';
import Modal from 'react-modal';
import ResetPasswordModal from './ResetPasswordModal';
//import './AuthModal.css';

Modal.setAppElement('#root');

const AuthModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [resetModalIsOpen, setResetModalIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setResetModalIsOpen(false); // Close reset modal if open when closing auth modal
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const openResetModal = () => {
    setModalIsOpen(false); // Close sign in/up modal if open
    setResetModalIsOpen(true);
  };

  const closeResetModal = () => {
    setResetModalIsOpen(false);
  };

  const handleSignIn = () => {
    // Implement sign in logic
    closeModal();
  };

  const handleSignUp = () => {
    // Implement sign up logic
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="auth-button">Sign In</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Authentication Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modalContent">
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          {isSignUp ? (
            <form onSubmit={handleSignUp}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit">Sign Up</button>
              <button type="button" onClick={toggleSignUp}>
                Already have an account? Sign In
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignIn}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
              <button type="button" onClick={toggleSignUp}>
                New user? Create an account
              </button>
              <button type="button" onClick={openResetModal}>
                Forgot Password
              </button>
            </form>
          )}
        </div>
        <button className="closeButton" onClick={closeModal}>X</button>
      </Modal>
      <ResetPasswordModal 
        isOpen={resetModalIsOpen} 
        onRequestClose={closeResetModal} 
      />
    </div>
  );
};

export default AuthModal;
