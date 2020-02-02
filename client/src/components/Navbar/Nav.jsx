import React from 'react';
import Navbar from './Navbar';
import SideBar from '../Sidebar/Sidebar';

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Navbar handleOpen={setOpen} />
      <SideBar open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default Nav;
