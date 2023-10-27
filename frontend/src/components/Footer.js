import React from 'react';
import { SETTINGS } from '../Constants';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4 text-center bottom-0 w-full">
      <p>&copy; 2023 `${SETTINGS.SITE_NAME}`. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
