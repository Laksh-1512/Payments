import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './Body';
import ContactUs from './Contact_us';
import FAQ from './FAQ';
import Header from './Header';
import Pricing from './Pricing';
import Blog from './Blog';

const routes = [
  {
    path: "/",
    element: (
      <>
        <Body />
        <FAQ />
        <ContactUs />
      </>
    )
  },
  {
    path: "pricing",
    element: <Pricing />
  },
  {
    path: "blog",
    element: <Blog />
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
