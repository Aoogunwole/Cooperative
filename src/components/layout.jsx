import React from 'react'
import PropTypes from "prop-types";
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children, _style, _space="28" }) => {
  return (
    <>
       <Navbar /> 
       <main className= {` ${_space}, ${_style} `}>{children}</main>
       <Footer />
    </>
  )
  
};

Layout.prototype = {
    children: PropTypes.node.isRequired,
    _space: PropTypes.string,
    _style: PropTypes.string
}

export default Layout
