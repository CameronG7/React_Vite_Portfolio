import React, { useEffect } from "react";
import { useState } from "react";
import  {Contact, About, Portfolio, Resume} from './pages/index.jsx';

export const Shell = ({currentPage}) => {
// based on the currentPage prop, render the appropriate page
useEffect(() => {
  console.log('currentPage: ', currentPage);
}, [currentPage]);

  switch (currentPage) {
    case 'About':
      return <About />;
    case 'Contact':
      return <Contact />;
    case 'Portfolio':
      return <Portfolio />;
    case 'Resume':
      return <Resume />;
    default:
      return <About />;

}
}