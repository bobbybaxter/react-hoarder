import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// import itemData from '../../helpers/data/itemData';

import './EditItem.scss';

const defaultItem = {
  itemName: '',
  itemImage: '',
  itemDescription: '',
};

class EditItem extends React.Component {
  state = {
    newItem: defaultItem,
  }

  render() {
    return (
      <div className="EditItem">
        <h1>Edit Item</h1>
      </div>
    );
  }
}

export default EditItem;
