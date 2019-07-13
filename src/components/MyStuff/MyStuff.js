import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyStuff.scss';
import stuffData from '../../helpers/data/stuffData';
import ItemCard from '../ItemCard/ItemCard';

class MyStuff extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    const { uid } = firebase.auth().currentUser;
    stuffData.getStuff(uid)
      .then(res => this.setState({ stuff: res }))
      .catch(err => console.error('getStuff didnt work', err));
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    const makeItemCards = this.state.stuff.map(item => (
      <ItemCard
        key={item.id}
        item={item}
      />
    ));
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link to={'/edit/12345'}>Edit Page</Link>
        <Link to={'/item/12345'}>Single Page</Link>
        <div className="d-flex flex-row flex-wrap">
          {makeItemCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
