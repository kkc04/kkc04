import React, { useState } from 'react';
import Modal from 'react-modal';
//import './ResetPasswordModal.css';

Modal.setAppElement('#root');

const ResetPasswordModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle reset password logic here
    onRequestClose(); // Close the modal after submitting
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reset Password Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modalContent">
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
      <button className="closeButton" onClick={onRequestClose}>X</button>
    </Modal>
  );
};

export default ResetPasswordModal;
