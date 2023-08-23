import { useState } from 'react';

const RsvpForm = ({ guest }) => {
  return (
    <div>
      <p>This is a form to RSVP for {guest.name}</p>
    </div>
  );
};

export default RsvpForm;
