import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import api from '../services/api';

export default function Login({ history }) {
  const [user, setUser] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/devs', { user });
    const { _id } = response.data;
    history.push(`/devs/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="logo tindev" />
        <input
          placeholder="Digite seu usuário github..."
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};