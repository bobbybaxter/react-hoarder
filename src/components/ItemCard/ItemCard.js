import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import itemShape from '../../helpers/propz/itemShape';

import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;
    const singleLink = `/item/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-4 mb-3">
        <div className="card border-0 shadow">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <Link className="btn-sm btn-outline-success" to={singleLink}>View</Link>
            <img src={item.itemImage} alt={item.itemName} className="stuffImg"></img>
            <p className="card-text">{item.itemlocation}</p>
            <div>
              <Link href="#" className="btn btn-outline-primary" to={editLink}>Edit</Link>
              <button href="#" className="btn btn-outline-danger" onClick={this.deleteMe}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
