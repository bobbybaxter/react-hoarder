import React from 'react';
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

  deleteItem = (itemId) => {
    stuffData.deleteItem(itemId)
      .then(() => this.getStuff())
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    const makeItemCards = this.state.stuff.map(item => (
      <ItemCard
        key={item.id}
        item={item}
        deleteItem={this.deleteItem}
      />
    ));
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="d-flex flex-row flex-wrap">
          {makeItemCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
