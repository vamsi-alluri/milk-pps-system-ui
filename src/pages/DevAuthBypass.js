import React, { useState } from 'react';


// Example JSON:
// {
//   "name": "Test Dev",
//   "accessScope": [
//     { "department": "Finance", "roleLevel": 1 },
//     { "department": "Procurement", "roleLevel": 3 },
//     { "department": "Admin", "roleLevel": 5 },
//     { "department": "Finance", "roleLevel": 3 },
//   ]
// }



const DevAuthBypass = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSetBypass = () => {
    if (process.env.NODE_ENV !== 'development') {
      setMessage('Bypass only allowed in development mode.');
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed.accessScope)) {
        setMessage('Invalid format: accessScope must be an array.');
        return;
      }

      localStorage.setItem('bypass-auth', JSON.stringify(parsed));
      setMessage('Bypass user set successfully.');
    } catch (err) {
      setMessage('Invalid JSON.');
    }
  };

  const handleClearBypass = () => {
    localStorage.removeItem('bypass-auth');
    setMessage('Bypass cleared.');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Dev Auth Bypass</h2>
      <textarea
        rows={10}
        cols={60}
        placeholder='Enter mock user JSON here'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <br />
      <button onClick={handleSetBypass}>Set Bypass</button>
      <button onClick={handleClearBypass} style={{ marginLeft: 10 }}>Clear Bypass</button>
      <p>{message}</p>
    </div>
  );
};

export default DevAuthBypass;
