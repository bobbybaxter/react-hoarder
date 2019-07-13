import React from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// import itemData from '../../helpers/data/itemData';

import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link to={'/edit/12345'}>Edit Page</Link>
        <Link to={'/item/12345'}>Single Page</Link>
      </div>
    );
  }
}

export default MyStuff;
