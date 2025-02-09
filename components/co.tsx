'use client';

import React, { useState } from 'react';
import InviteForm from './InviteForm';
import ConfirmScreen from './ConfirmScreen';

interface RSVP {
  name: string;
  dietaryRequirements: string;
}

const RSVPComponent: React.FC = () => {
  const [showConfirmScreen, setShowConfirmScreen] = useState(false);
  const [toggleRsvps, setToggleRsvps] = useState(false);
  const [toggleIcon, setToggleIcon] = useState("⊕");
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [pendingRsvp, setPendingRsvp] = useState<RSVP | null>(null);

  const onSubmit = (name: string, dietaryRequirements: string) => {
    if (!name || !dietaryRequirements) {
      setErrorMessage('Please fill all fields');
    } else {
      setPendingRsvp({ name, dietaryRequirements });
      setShowConfirmScreen(true);
    }
  };

  const onConfirm = async () => {
    if (pendingRsvp) {
      const newRsvps = [...rsvps, pendingRsvp];
      setRsvps(newRsvps);
      setShowConfirmScreen(false);
      setErrorMessage('');

      // Send data to Google Sheets
      try {
        const response = await fetch('/api/rsvp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pendingRsvp),
        });

        if (!response.ok) {
          throw new Error('Failed to save RSVP');
        }
      } catch (error) {
        console.error('Error saving RSVP:', error);
        setErrorMessage('Failed to save RSVP. Please try again.');
      }
    }
  };

  const toggle = () => {
    setToggleRsvps(!toggleRsvps);
    setToggleIcon(toggleRsvps ? "⊕" : "⊖");
  };

  let view = showConfirmScreen ? (
    <ConfirmScreen 
      name={pendingRsvp?.name || ''}
      dietaryRequirements={pendingRsvp?.dietaryRequirements || ''}
      onConfirm={onConfirm}
      onEdit={() => setShowConfirmScreen(false)}
    />
  ) : (
    <InviteForm
      showConfirmScreen={onSubmit}
      errorMessage={errorMessage}
    />
  );

  return (
    <div>
      {view}
      <button onClick={toggle}>{toggleIcon} Guest List</button>
      {toggleRsvps && (
        <div>
          {rsvps.length > 0 ? (
            rsvps.map((r, index) => (
              <li key={index}>{r.name}, {r.dietaryRequirements}</li>
            ))
          ) : (
            <p>No guests so far</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RSVPComponent;