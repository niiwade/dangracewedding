import type React from 'react';

interface ConfirmScreenProps {
  name: string;
  dietaryRequirements: string;
  onEdit: () => void;
  onConfirm: () => void;
}

const ConfirmScreen: React.FC<ConfirmScreenProps> = ({ name, dietaryRequirements, onEdit, onConfirm }) => {
  return (
    <div>
      <h2>Confirm RSVP Details</h2>
      <p>Name: {name}</p>
      <p>Dietary Requirements: {dietaryRequirements}</p>
      <button 
        className="secondarybtn"
        onClick={onEdit}
      >
        ✕
      </button>
      <button 
        className="mainbtn"
        onClick={onConfirm}
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmScreen;