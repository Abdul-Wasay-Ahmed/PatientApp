import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarLink } from './styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/patients">View All Patients</NavbarLink>
      <NavbarLink to="/add-patient">Add New Patient</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;