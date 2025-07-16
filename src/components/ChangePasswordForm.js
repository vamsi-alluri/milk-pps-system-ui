import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';

const passwordCriteria = [
  { key: 'length', test: (p) => p.length >= 8, label: 'At least 8 characters' },
  { key: 'uppercase', test: (p) => /[A-Z]/.test(p), label: 'One uppercase letter' },
  { key: 'lowercase', test: (p) => /[a-z]/.test(p), label: 'One lowercase letter' },
  { key: 'number', test: (p) => /[0-9]/.test(p), label: 'One number' },
  { key: 'special', test: (p) => /[^A-Za-z0-9]/.test(p), label: 'One special character' },
];

const ChangePasswordForm = () => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const allValid = passwordCriteria.every(c => c.test(newPass));
  const match = newPass && confirm && newPass === confirm;

  const getIcon = (valid) =>
    valid ? <FaCheckCircle color="green" className="ms-2" /> : <FaTimesCircle color="red" className="ms-2" />;

  const getBoxClass = (isMatch) =>
    isMatch ? 'border border-success' : confirm && !isMatch ? 'border border-danger' : '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7230/api/register/change-password', {
        oldPassword: current,
        newPassword: newPass
      }, {withCredentials: true});
      if (response?.data === true){
        setSuccess('Password updated successfully.');
        setError('');
        setCurrent('');
        setNewPass('');
        setConfirm('');
      }
      else{
        setSuccess('');
        setError(response?.data || 'Password change failed.');
      }
    } catch (err) {
      setSuccess('');
      console.log(err);
      setError(err.response?.data || 'Password change failed.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-3" controlId="currentPassword">
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          type="password"
          value={current}
          onChange={e => setCurrent(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="newPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          value={newPass}
          onChange={e => setNewPass(e.target.value)}
          required
        />
        <ul className="mt-2" style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {passwordCriteria.map(c => (
            <li key={c.key}>
              {c.label} {getIcon(c.test(newPass))}
            </li>
          ))}
        </ul>
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          className={getBoxClass(match)}
          required
        />
        {confirm && (
          <div className="mt-1 text-muted">
            {match ? (
              <span className="text-success">Passwords match {getIcon(true)}</span>
            ) : (
              <span className="text-danger">Passwords do not match {getIcon(false)}</span>
            )}
          </div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!allValid || !match}>
        Change Password
      </Button>
    </Form>
  );
};

export default ChangePasswordForm;
