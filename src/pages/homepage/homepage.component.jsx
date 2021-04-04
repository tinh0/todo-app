import React from 'react';

import './homepage.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const HomePage = ({ currentUser }) => (
  <div className='home' onClick={() => auth.signOut()}>
    Home Page
    {currentUser.displayName}
  </div>
);

export default HomePage;
