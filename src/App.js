
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [showFileMenu, setShowFileMenu] = useState(false);

  const handleSubmit = () => {
    setSubmittedText(inputValue);
  };

  return (
    <div className="App">
      <div className="menu-bar">
        <div className="menu-item" onClick={() => setShowFileMenu(!showFileMenu)}>
          File
          {showFileMenu && (
            <div className="dropdown-menu">
              <div>QA mode</div>
              <div>Batch mode</div>
            </div>
          )}
        </div>
        <div className="menu-item">Setting</div>
        <div className="menu-item">Help</div>
      </div>
      <div className="container">
        <div className="io-container">
          <div className="question-row">
            <div className="question-label">Question</div>
            <input
              type="text"
              className="question-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="I love you"
            />
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <textarea
            className="question-output"
            value={submittedText}
            readOnly
            placeholder="I love you"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
