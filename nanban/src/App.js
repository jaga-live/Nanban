import React from 'react';

import Layout from './hoc/Layout/Layout';
import './App.css'

const app = props => {
  return (
    <div className="App">
      <Layout>
        <p>Nanban Connect</p>
      </Layout>
    </div>
  );
}

export default app;