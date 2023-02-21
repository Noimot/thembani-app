import React from 'react';
import { Link } from 'react-router-dom';

const CatchAllRoutes = () => {
  return (
    <div><p>This page does not exist. click <Link to="/login" className='font-bold'>here</Link> to login</p></div>
  )
}

export default CatchAllRoutes;