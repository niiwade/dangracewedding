'use client'
import React, { useState } from 'react';

interface RSVPFormData {
  name: string;
  email: string;
  attendance: 'Yes' | 'No' | 'Maybe';
}

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attendance: 'Yes',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your RSVP!');
        setFormData({ name: '', email: '', attendance: 'Yes' });
      } else {
        setSubmitMessage('There was an error submitting your RSVP. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="attendance">Attendance:</label>
        <select
          id="attendance"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
        >
          <option value="Yes">Yes, I'll be there</option>
          <option value="No">No, I can't make it</option>
          <option value="Maybe">Maybe</option>
        </select>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
      </button>
      {submitMessage && <p>{submitMessage}</p>}
    </form>
  );
};

export default RSVPForm;