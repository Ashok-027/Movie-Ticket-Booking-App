import React, { useState, useEffect } from 'react';
import './style.css';

function ProgressBar({ value ,onTierChange}) {
  const [progress, setProgress] = useState(0);
  const [tier, setTier] = useState('Bronze'); // Default tier
 
  useEffect(() => {
    if (value < 250 ) {
      setProgress(0.25);
      setTier('Bronze');
    }else if (value >= 250 && value<500) {
      setProgress(0.5);
      setTier('Gold');
    }else if (value >= 500 && value<750) {
      setProgress(0.75);
      setTier('Platinum');
    } else {
      setProgress(1);
      setTier('Diamond');
    } 
    onTierChange(tier);
  }, [value, tier]);
 
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div align="center" className="progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="progress-labels">
        <span className="label">Bronze</span>
        <span className="label">Gold</span>
        <span className="label">Platinum</span>
        <span className="label">Diamond</span>

      </div>
    </div>
  );
}
 
export default ProgressBar;
 