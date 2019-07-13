import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import stuffData from '../../helpers/data/stuffData';

import './NewItem.scss';

const defaultItem = {
  itemName: '',
  itemImage: '',
  itemDescription: '',
};

class NewItem extends React.Component {
  state = {
    newItem: defaultItem,
  }

  formFieldStringState = (attr, e) => {
    const tempItem = { ...this.state.newItem };
    tempItem[attr] = e.target.value;
    this.setState({ newItem: tempItem });
  }

  itemNameChange = e => this.formFieldStringState('itemName', e);

  itemImageChange = e => this.formFieldStringState('itemImage', e);

  itemDescriptionChange = e => this.formFieldStringState('itemDescription', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newItem };
    saveMe.uid = firebase.auth().currentUser.uid;
    stuffData.postItem(saveMe)
      .then(() => this.props.history.push('/mystuff'))
      .catch(err => console.error('formSubmit didnt post', err));
  }

  render() {
    const { newItem } = this.state;
    return (
      <div className="NewItem">
        <h1>Add New Item</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="newItemName">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="newItemName"
              aria-describedby="new item name"
              placeholder="Waffle Iron"
              value={newItem.itemName}
              onChange={this.itemNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newItemURL">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="newItemURL"
              aria-describedby="new image URL"
              placeholder="www.google.com"
              value={newItem.itemImage}
              onChange={this.itemImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newItemDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="newItemDescription"
              aria-describedby="new item description"
              placeholder="an iron for waffles"
              value={newItem.itemDescription}
              onChange={this.itemDescriptionChange}
            />
          </div>
          <button type="submit" className="btdn btn-primary">Add Item</button>
        </form>
      </div>
    );
  }
}

export default NewItem;
