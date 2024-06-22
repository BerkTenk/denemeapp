import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import Register from './components/Register';
import Calendar from './components/Calendar';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() { 
    return (
      <Layout>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/calendar" element={<Calendar />} />
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}