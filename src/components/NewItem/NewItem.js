import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// import itemData from '../../helpers/data/itemData';

import './NewItem.scss';

const defaultItem = {
  itemName: '',
  itemImage: '',
  imageDescription: '',
};

class NewItem extends React.Component {
  state = {
    newItem: defaultItem,
  }

  render() {
    return (
      <div className="NewItem">
        <h1>New Item</h1>
      </div>
    );
  }
}

export default NewItem;
