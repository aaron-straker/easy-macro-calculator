import React from 'react';
import Header from './stateless/Header';
import Sidebar from './stateless/Sidebar';
import Footer from './stateless/Footer';
import UserForm from './user-form';

const Macros = () => (
  <div>
    <div className="col-md-12">
      <Header />
    </div>
    <div className="col-md-9">
      <UserForm />
    </div>
    <div className="col-md-3">
      <Sidebar />
    </div>
    <div className="col-md-12">
      <Footer />
    </div>
  </div>
);

export default Macros;
