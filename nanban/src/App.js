import React, { useState } from 'react';

import Layout from './hoc/Layout/Layout';
// import HomePage from './components/Pages/Home/HomePage'
import './App.css'

const app = props => {

  const [state, setState] = useState()
  return (
    <div className="App">
      <Layout>
        <p>Nanban Connect</p>
      </Layout>
    </div>
  );
}

export default app;