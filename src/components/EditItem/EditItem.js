import React from 'react';

import stuffData from '../../helpers/data/stuffData';

import './EditItem.scss';

const defaultItem = {
  itemName: '',
  itemImage: '',
  itemDescription: '',
  uid: '',
};

class EditItem extends React.Component {
  state = {
    newItem: defaultItem,
  }

  componentDidMount() {
    const itemId = this.props.match.params.id;
    stuffData.getSingleItem(itemId)
      .then(itemPromise => this.setState({ newItem: itemPromise.data }))
      .catch(err => console.error(err));
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
    const itemId = this.props.match.params.id;
    stuffData.putItem(saveMe, itemId)
      .then(() => this.props.history.push('/mystuff'))
      .catch(err => console.error('formSubmit didnt post', err));
  }

  render() {
    const { newItem } = this.state;
    return (
      <div className="EditItem">
        <h1>Edit Item</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="editItemName">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="editItemName"
              aria-describedby="edit item name"
              placeholder="Waffle Iron"
              value={newItem.itemName}
              onChange={this.itemNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editItemURL">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="editItemURL"
              aria-describedby="edit image URL"
              placeholder="www.google.com"
              value={newItem.itemImage}
              onChange={this.itemImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editItemDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="editItemDescription"
              aria-describedby="edit item description"
              placeholder="an iron for waffles"
              value={newItem.itemDescription}
              onChange={this.itemDescriptionChange}
            />
          </div>
          <button type="submit" className="btdn btn-primary">Update Item</button>
        </form>
      </div>
    );
  }
}

export default EditItem;
