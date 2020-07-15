import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

export const Home = () => {
  return (
    <div>
      <div className='grid-2'>
        <ContactForm />
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
