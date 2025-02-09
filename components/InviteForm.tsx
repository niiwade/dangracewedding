import React, { useState } from 'react';

interface InviteFormProps {
  showConfirmScreen: (name: string, dietaryRequirements: string) => void;
  errorMessage: string;
}

const InviteForm: React.FC<InviteFormProps> = ({ showConfirmScreen, errorMessage }) => {
  const [name, setName] = useState('');
  const [dietaryRequirements, setDietaryRequirements] = useState('');

  const nextClicked = (e: React.FormEvent) => {
    e.preventDefault();
    showConfirmScreen(name, dietaryRequirements);
  };

  return (
    <div>
      <p>{errorMessage}</p>
      <form className="form">
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            className="textfield"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Dietary Requirements:
          <br />
          <select 
            className="textfield"
            onChange={(e) => setDietaryRequirements(e.target.value)}
          >
            <option value="" disabled selected>Select</option>
            <option value="none">I'll eat anything!</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescatarian">Pescatarian</option>
          </select>
        </label>
        <br /><br />
        <button 
          className="mainbtn"
          onClick={nextClicked}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default InviteForm;