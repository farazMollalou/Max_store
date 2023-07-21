import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import { routes } from './Components/Routes';

function App() {

  let router = useRoutes(routes)

  return (
    <>
      {router}
      <ScrollToTop />
    </>
  )
}

export default App;
