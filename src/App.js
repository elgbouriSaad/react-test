import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('submittedText');
    if (saved) {
      setSubmitted(saved);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(input);
    localStorage.setItem('submittedText', input);
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Type and Display</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <h1>Type and Display</h1>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type something..."
          style={{ padding: '0.5rem', fontSize: '1rem', width: '250px' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>Submit</button>
      </form>
      {submitted && (
        <div style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
          <strong>You typed:</strong> {submitted}
        </div>
      )}
    </div>
  );
}

export default App; 