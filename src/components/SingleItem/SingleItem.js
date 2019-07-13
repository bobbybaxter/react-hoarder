/* eslint-disable max-len */
import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

import stuffData from '../../helpers/data/stuffData';

import './SingleItem.scss';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const itemId = this.props.match.params.id;
    stuffData.getSingleItem(itemId)
      .then(itemPromise => this.setState({ item: itemPromise.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleItem">
        <div className="ItemCard mb-3">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">{item.itemName}</h5>
              <img src={item.itemImage} alt={item.itemName} className="stuffImg"></img>
              <p className="card-text">{item.itemlocation}</p>
              <div>
                {/* <Link href="#" className="btn btn-outline-primary" to={editLink}>Edit</Link> */}
                {/* <button href="#" className="btn btn-outline-danger" onClick={this.deleteMe}>Delete</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleItem;
